let keranjang = [];
let produk_sementara = [];

$(document).ready(function () {
    includeHeader();
    includeFooter();
});

$(document).on("click", ".addchart", function (e) {
    // e.preventDefault()

    let val = $(this).data('value');
    addchartTemp(val)
    $('#KonfirmasiModal').modal('show')

});

function addchartTemp(val) {
    produk_sementara = [];
    produk_sementara.push(val)
    console.log(produk_sementara)
}

function addchart() {
    if (keranjang.includes(produk_sementara[0])) {
        Swal.fire(
            'produk sudah ada!',
            'Produk sudah pernah di tambahkan kedalam keranjang!',
            'error'
        )
    } else {
        keranjang.push(produk_sementara[0])
        Swal.fire(
            'Produk Berhasil Ditambahkan!',
            'Berhasil di tambahkan kedalam keranjang!',
            'success'
        )
    }
    console.log(keranjang)
}

$(document).on("click", ".yesButton", function (e) {
    e.preventDefault()
    addchart()
    $('#KonfirmasiModal').modal('hide')
    $('#indexChart').text(keranjang.length)
    if (keranjang.length == 0) {
        $('#indexChart').prop('hidden', true)
    } else {
        $('#indexChart').prop('hidden', false)
    }

});


$(document).on("click", ".noButton", function (e) {
    e.preventDefault()
    produk_sementara = [];
});

$(document).on("click", ".pilihClass", function (e) {
    e.preventDefault()
    let val = $(this).data('value');
    console.log(val)

    $('.produk-wrap').prop('hidden', false)
    $('.' + val + '').each(function () {
        $(this).parents('.produk-wrap').prop('hidden', true)
    })

});