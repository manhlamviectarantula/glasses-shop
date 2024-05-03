const URL_DATA = "https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=88ae0cf9-7aa5-7b41-c6fd-3c5968433553&category=1017&page=1&urlKey=gong-kinh"

            const MY_CART = JSON.parse(localStorage.getItem("MY_CART")) || []

            const fetchDate = () => {

                let loadingEl = document.getElementById("loading-tiki")
                loadingEl.innerHTML = "Đang loading sản phẩm từ Tiki..."
                const response = fetch(URL_DATA).then(response => response.json()).then(data => {
                    console.log(data.data) 
                    const listItemel = document.getElementsByClassName("box-container")[0]

                    setTimeout(() => {
                        loadingEl.innerHTML = ""
                        data.data.forEach(item => {
                            const card = document.createElement('div')
                            card.classList.add('box')

                            const image = document.createElement('img')
                            image.src = item.thumbnail_url
                            image.addEventListener('click', () => {
                                window.location.href = 'detail_product.html?id=' + item.id;
                            })
                            card.appendChild(image)

                            const h3 = document.createElement('h3')
                            h3.innerHTML = item.name
                            card.appendChild(h3)

                            const p = document.createElement('p')
                            p.innerHTML = formatPrice(item.price) 
                            card.appendChild(p)

                            const button = document.createElement('button')
                            button.innerHTML = "Thêm"
                            button.onclick = () => {
                                const item_cart = {
                                    name: item.name,
                                    price: item.price,
                                    image: item.thumbnail_url,
                                    quantity: 1
                                }

                                alert("Đã thêm vào giỏ hàng")
                                const existingItemIndex = MY_CART.findIndex(cartItem => cartItem.name === item.name)
                                if (existingItemIndex !== -1) {
                                    MY_CART[existingItemIndex].quantity++
                                } else {
                                    MY_CART.push(item_cart)
                                }
                                console.log(MY_CART)

                                localStorage.setItem("MY_CART", JSON.stringify(MY_CART))

                            }
                            card.appendChild(button)

                            listItemel.appendChild(card)
                        })

                        function formatPrice(price) {
                            return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                        }
                    },)

                })
            }
            
            fetchDate()
