$(document).ready(function () {

    let url = 'http://192.168.2.224:3001';
    let form = '';
    let loggedIn = localStorage.getItem('loggedIn');
    let gcomps = [];
    // var selectedCompRow;
    if (!loggedIn) {
        $("#compdata").html(`<div id="login" class="row mt-4"><input type="password" class="form-control col-6" id="key" placeholder="كلمة المرور" /><button id="en" class="form-control col-2">دخول</button></div>`);
    } else {
        $("#compdata").html(getForm(false));
    }

    $(document).on("click", "#save", function () {
        let cid = $(this).data('cid');
        let name = $("#name").val();
        let phone = $("#phone").val();
        let type = $("input[name=type]:checked").val();
        let status = $("input[name=status]:checked").val();
        let address = $("#address").val();
        let email = $("#email").val();
        $.ajax({
            url: url + "/save",
            type: "post",
            data: { cid, type, status, name, phone, address, email },
            success: function (result) {
                // console.log(result.affectedRows);
                $("#name").val('');
                $("#phone").val('');
                $("#address").val('');
                if (cid != '0' && result.affectedRows == 1) {
                    $("#modal").html('').css('display', 'none');
                    $("#compdata").css("opacity", '1'); 
                    let row = $("#list").find(`i[data-comp='${cid}']`).parent().parent();
                    row.html(`<td>${cid}</td><td>${name}</td><td>${type}</td><td>${status}</td><td>${phone}</td><td>${email}</td><td>${address}</td><td><i data-comp="${cid}" class="bi bi-pencil-fill"></i></td>`);
                }
            }
        })
    });

    $(document).on('click', '#en', function () {
        if ($("#key").val() == '1234567') {
            localStorage.setItem("loggedIn", true);
            $("#compdata").html(getForm(false));
        } else {
            alert("يجب إدخال كلمة المرور الصحيحة");
        }
    });

    $(document).on("click", "#getLink", function () {
        if (localStorage.getItem("loggedIn") == 'true') {
            $.ajax({
                url: url + "/comps",
                type: "get",
                success: function (comps) {
                    gcomps = comps;
                    let table = `<table id="list" class="table table-stiped table-sm mt-4"><tr><th>الرقم</th><th>الإسم</th><th>النوع</th><th>الحالة</th><th>الهواتف</th><th>البريد الإلكتروني</th><th>العنوان</th><th>تعديل</th></tr>`;
                    comps.forEach(comp => {
                        table += `<tr><td>${comp.id}</td><td>${comp.name}</td><td>${comp.type}</td><td>${comp.status}</td><td>${comp.phone}</td><td>${comp.email}</td><td>${comp.address}</td><td><i data-comp="${comp.id}" class="bi bi-pencil-fill"></i></td></tr>`;
                    });
                    table += `</table>`;
                    $("#compdata").html(table);
                }
            });
        } else {
            $("#compdata").html(`<div class="alert alert-danger my-4">يجب تسجيل الدخول أولاً</div>`);
        }
    });

    $(document).on('click', "#close", function () {
        $("#modal").css("display", "none");
        $("#compdata").css("opacity", '1');
    });

    $(document).on("click", "#logOut", function () {
        if (localStorage.getItem("loggedIn") == 'true') {
            localStorage.removeItem("loggedIn");
            $("#compdata").html(`<div class="alert alert-success my-4">تم تسجيل الخروج بنجاح</div>`);
        }
    });

    $(document).on("click", '.bi-pencil-fill', function () {
        // selectedCompRow = $(this).parent().parent();
        let comp = +$(this).data("comp");
        // console.log(gcomps[comp - 1]);
        $("#modal").html(getForm(gcomps[comp - 1])).addClass("dialog").css("display", 'block');
        $("#compdata").css("opacity", '.3');
    });

    $(document).on('keydown', '#phone', function (e) {
        let keyCode = e.keyCode;
        let temp = '';
        let count = 0;
        let phones = [];
        if (keyCode < 106 && keyCode > 96) {
            temp += char(keyCode);
            if (temp.length == 10) {
                phones.push(temp);
                temp = '';
            }
        } else {
            console.log(temp);
        }
        console.log(phones);
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////

function getForm(comp) {
    let cid = 0;
    let close = '';
    let cname = '';
    let phone = '';
    let address = '';
    let email = '';
    let edit = '';
    let radioOne = {first: '', second: ''};
    let radioTwo = {first: '', second: ''};
    if (comp) {
        cname = comp.name;
        phone = comp.phone;
        address = comp.address;
        email = comp.email;
        edit = 'تعديل ';
        cid = comp.id;
        if(comp.type=='شركة') radioOne.first = 'checked'; else radioOne.second = 'checked';
        if(comp.type=='جديد') radioTwo.first = 'checked'; else radioTwo.second = 'checked';
        close = '<span id="close" class="btn btn-sm btn-danger">إغلاق</span>';
    }
    // console.log({cname, phone, address, email, edit});
    return `${close}<h1>${edit}بيانات المتقدم</h1>
    <div class="row">
        <div class="col-4 py-3">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="type" value="شركة" ${radioOne.first}>
                <label class="form-check-label" for="inlineRadio1">شركة</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="type" value="عمل" ${radioOne.second}>
                <label class="form-check-label" for="inlineRadio2">عمل</label>
            </div>
        </div>
        <div class="col-4 py-3">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="status" value="جديد" ${radioTwo.first}>
                <label class="form-check-label" for="inlineRadio1">جديد</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="status" value="قديم" ${radioTwo.second}>
                <label class="form-check-label" for="inlineRadio2">قديم</label>
            </div>
        </div>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name" value="${cname}" placeholder="name@example.com">
        <label for="name">الإسم</label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="phone" value="${phone}" placeholder="0912367234 - 0123676128">
        <label for="phone">الهواتف</label>
    </div>

    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="email" value="${email}" placeholder="example@doamin.com">
        <label for="email">البريد الإلكتروني</label>
    </div>

    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="address" value="${address}" placeholder="الخرطوم شارع البلدية">
        <label for="adress">العنوان</label>
    </div>
    <button data-cid="${cid}" type="button" id="save" class="col-6 form-control btn btn-success">حفـــــــــــــــــــــــــظ</button>
    `;
}