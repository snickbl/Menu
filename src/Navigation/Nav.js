import React from 'react'
import './Nav.css'

const Nav = () => {

  return (
    <nav className="navigation">
        <ul className='navigs'>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-basket-shopping"></i> Alishlar <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a></li>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-cart-shopping"></i> Satishlar <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a></li>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-money-bill"></i> Firmaya iade <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a></li>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-money-bill-1"></i> Mushteriden iade <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a></li>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-screwdriver-wrench"></i> Diger <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a>
            <ul class="dropdown">
                <li className='li'><a className='link' href="#">Tenzimlemeler</a></li>
                <li className='li'><a className='link' href="#">Mehsullar</a></li>
                <li className='li'><a className='link' href="#">Valyutalar</a></li>
                <li className='li'><a className='link' href="#">Mushteriler</a></li>
                <li className='li'><a className='link' href="#">Techizatchilar</a></li>
                <li className='li'><a className='link' href="#">Isstifadechi selahiyyetleri</a></li>
                <li className='li'><a className='link' href="#">Ishchiler</a></li>
                <li className='li'><a className='link' href="#">Istifadechiler</a></li>
                <li className='li'><a className='link' href="#">Qiymetler</a></li>
                <li className='li'><a className='link' href="#">Diger idareetme</a></li>
                <li className='li'><a className='link' href="#">Reviziya senedleri</a></li>
                <li className='li'><a className='link' href="#">Sifarish siyahilari</a></li>
                <li className='li'><a className='link' href="#">Sifarish hazirlama</a></li>
                <li className='li'><a className='link' href="#">Yuvens</a></li>
                <li className='li'><a className='link' href="#">Yuvens sayi</a></li>
            </ul>
            </li>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-warehouse"></i> Anbar <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a></li>
            <li className='li'><a className='link' href="#"><i class="fa-solid fa-receipt"></i> Muhasibet <i class="fa-solid fa-caret-right"></i><i class="fa-solid fa-caret-down"></i></a></li>
        </ul>
    </nav>
  )
}

export default Nav