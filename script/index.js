document.addEventListener('DOMContentLoaded',function (){
    if ($('.app')){
        $.ajax({
            url:'http://localhost:8000/data.php',
            type:'GET',
            success:function (data){
                $('.app').html('')
                var result = JSON.parse(data)
                for (let i = 0; i < result.length; i++) {
                    $('.app').append(`<div class="item_product col-4 p-4">
                    <img style="border-radius: 5px;height: 230px;width: 100%;object-fit: cover" src="${result[i][3]}" alt="">
                    <br>
                    <p style="font-size: 25px;font-weight:bold ;color: red">$ ${result[i][2]}</p>
                    <p style="font-size: 25px;font-weight:bold ">${result[i][1]}</p>
                    <button class="btn btn-primary" style="width: 120px">Buy</button>
                    <button class="btn btn-danger" style="width: 120px">Add to cart</button>
                    </div>`)
                }
            },
            error:function (){
                alert('Không tìm thấy cơ sở dữ liệu')
            }
        })
    }

    if ($('.btn_submit')){
        $('.btn_submit').click(function (){
            $.ajax({
                url: 'http://localhost:8000/create.php',
                type: 'POST',
                data:{
                    name:$('#product_name').val(),
                    price:$('#price').val(),
                    thumbnail:$('#thumbnail').val(),
                },
                success:function (data){
                    $('input').val('')
                    alert('Tạo mới sản phẩm thành công')
                    $('.img_review').addClass('d-none')
                },
                error:function(){
                    alert('Thêm mới thất bại vui lòng kiểm tra lại')
                }
            })
        })
    }



    $('#thumbnail').keyup(function (){
        $('.img_review').attr('src',$('#thumbnail').val())
        $('.img_review').removeClass('d-none')
    })
})
