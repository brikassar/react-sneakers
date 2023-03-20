import React from 'react';

const Drawer = () => {
    return (
        <div  className='overlay'>
            <div className='drawer'>
                <h2 className='mb-30 d-flex justify-between'>Корзина  <img className='cu-p' src="/img/btn-remove.svg" alt="Remove"/></h2>
                <div className="items">
                    <div className="cartItem mb-20 d-flex align-center">
                        <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                            <b>12 999</b>
                        </div>
                        <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                    <div className="cartItem mb-20 d-flex align-center">
                        <div style={{backgroundImage: 'url(/img/sneakers/2.jpg)'}} className="cartItemImg"></div>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>Мужские кроссовки Nike Air Max 270</p>
                            <b>12 999</b>
                        </div>
                        <img className='removeBtn' src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className='d-flex'>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб</b>
                        </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;