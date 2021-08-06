import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { NextPage } from 'next'; 

import { 
	setCart, 
	setWishlist, 
	setCartLoaded,
	setWishlistLoaded,
	setAllCategoryLoaded,
	setAllCategory,
} from '../redux/reducers/main';
import {
	setActiveTab,
	setTabProducts,
	setTabProductsLoaded
} from '../redux/reducers/home.js';
import { checkLocalStorage } from '../utils/store';
import { wrapper } from '../redux/reducer';

import Layout from '../components/global/Layout.js';
import TopTrendingBlock from '../components/pages/home/topTrendingBlock';
import FavouriteBlock from '../components/pages/home/favouriteBlock';
import ExpireProductsBlock from '../components/pages/home/expireProductsBlock';
import ArrivalsBlock from '../components/pages/home/arrivalsBlock';
import OfferBlock from '../components/pages/home/offerBlock';
import FeaturedProductsBlock from '../components/pages/home/featuredProductsBlock';



const Home: NextPage = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return{
			cart: state.main.cart,
			wishlist: state.main.wishlist,
		}
	});

	useEffect(() => {
		dispatch(setCart(checkLocalStorage('cart')));
		dispatch(setWishlist(checkLocalStorage('wishlist')));
		dispatch(setCartLoaded(true));
		dispatch(setWishlistLoaded(true));	
	}, []);
	
	return (
		    <Layout>
		    	{/*====== App Content ======*/}
					  {/*====== Primary Slider ======*/}
					  <div className="s-skeleton s-skeleton--h-600 s-skeleton--bg-grey">
					    <div className="owl-carousel primary-style-1" id="hero-slider">
					      <div className="hero-slide hero-slide--1">
					        <div className="container">
					          <div className="row">
					            <div className="col-12">
					              <div className="slider-content slider-content--animation">
					                <span className="content-span-1 u-c-secondary">Latest Update Stock</span>
					                <span className="content-span-2 u-c-secondary">30% Off On Electronics</span>
					                <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>
					                <span className="content-span-4 u-c-secondary">Starting At
					                  <span className="u-c-brand">$1050.00</span></span>
					                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
					            </div>
					          </div>
					        </div>
					      </div>
					      <div className="hero-slide hero-slide--2">
					        <div className="container">
					          <div className="row">
					            <div className="col-12">
					              <div className="slider-content slider-content--animation">
					                <span className="content-span-1 u-c-white">Find Top Brands</span>
					                <span className="content-span-2 u-c-white">10% Off On Electronics</span>
					                <span className="content-span-3 u-c-white">Find electronics on best prices, Also Discover most selling products of electronics</span>
					                <span className="content-span-4 u-c-white">Starting At
					                  <span className="u-c-brand">$380.00</span></span>
					                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
					            </div>
					          </div>
					        </div>
					      </div>
					      <div className="hero-slide hero-slide--3">
					        <div className="container">
					          <div className="row">
					            <div className="col-12">
					              <div className="slider-content slider-content--animation">
					                <span className="content-span-1 u-c-secondary">Find Top Brands</span>
					                <span className="content-span-2 u-c-secondary">10% Off On Electronics</span>
					                <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>
					                <span className="content-span-4 u-c-secondary">Starting At
					                  <span className="u-c-brand">$550.00</span></span>
					                <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
					            </div>
					          </div>
					        </div>
					      </div>
					    </div>
					  </div>
					  	{/*====== End - Primary Slider ======*/}
					  	{/*====== Section 1 ======*/}
					  	<FavouriteBlock />
					  	{/*====== End - Section 1 ======*/}
					  	{/*====== Section 2 ======*/}
					 	<TopTrendingBlock />
					  	{/*====== End - Section 2 ======*/}
					  	{/*====== Section 3 ======*/}
					  	<ExpireProductsBlock />
					  	{/*====== End - Section 3 ======*/}
					  	{/*====== Section 4 ======*/}
						<ArrivalsBlock />
						{/*====== End - Section 4 ======*/}
					  	{/*====== Section 5 ======*/}
					  	<OfferBlock />
					  	{/*====== End - Section 5 ======*/}
					  	{/*====== Section 6 ======*/}
					  	<FeaturedProductsBlock />
					  	{/*====== End - Section 6 ======*/}
					  {/*====== Section 7 ======*/}
					  <div className="u-s-p-b-60">
					    {/*====== Section Content ======*/}
					    <div className="section__content">
					      <div className="container">
					        <div className="row">
					          <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
					            <a className="promotion" href="shop-side-version-2.html">
					              <div className="aspect aspect--bg-grey aspect--square">
					                <img className="aspect__img promotion__img" src={require('../assets/images/promo/promo-img-1.jpg').default.src} alt="" /></div>
					              <div className="promotion__content">
					                <div className="promotion__text-wrap">
					                  <div className="promotion__text-1">
					                    <span className="u-c-secondary">ACCESSORIES FOR YOUR EVERYDAY</span></div>
					                  <div className="promotion__text-2">
					                    <span className="u-c-secondary">GET IN</span>
					                    <span className="u-c-brand">TOUCH</span></div>
					                </div>
					              </div>
					            </a></div>
					          <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
					            <a className="promotion" href="shop-side-version-2.html">
					              <div className="aspect aspect--bg-grey aspect--square">
					                <img className="aspect__img promotion__img" src={require('../assets/images/promo/promo-img-2.jpg').default.src} alt="" /></div>
					              <div className="promotion__content">
					                <div className="promotion__text-wrap">
					                  <div className="promotion__text-1">
					                    <span className="u-c-secondary">SMARTPHONE</span>
					                    <span className="u-c-brand">2019</span></div>
					                  <div className="promotion__text-2">
					                    <span className="u-c-secondary">NEW ARRIVALS</span></div>
					                </div>
					              </div>
					            </a></div>
					          <div className="col-lg-4 col-md-4 col-sm-6 u-s-m-b-30">
					            <a className="promotion" href="shop-side-version-2.html">
					              <div className="aspect aspect--bg-grey aspect--square">
					                <img className="aspect__img promotion__img" src={require('../assets/images/promo/promo-img-3.jpg').default.src} alt="" /></div>
					              <div className="promotion__content">
					                <div className="promotion__text-wrap">
					                  <div className="promotion__text-1">
					                    <span className="u-c-secondary">DSLR FOR NEW GENERATION</span></div>
					                  <div className="promotion__text-2">
					                    <span className="u-c-brand">GET UP TO 10% OFF</span></div>
					                </div>
					              </div>
					            </a></div>
					        </div>
					      </div>
					    </div>
					    {/*====== End - Section Content ======*/}
					  </div>
					  {/*====== End - Section 7 ======*/}
					  {/*====== Section 8 ======*/}
					  <div className="u-s-p-b-60">
					    {/*====== Section Content ======*/}
					    <div className="section__content">
					      <div className="container">
					        <div className="row">
					          <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
					            <div className="column-product">
					              <span className="column-product__title u-c-secondary u-s-m-b-25">SPECIAL PRODUCTS</span>
					              <ul className="column-product__list">
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product23.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 15 Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00</span></div>
					                  </div>
					                </li>
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product24.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 13 Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00</span></div>
					                  </div>
					                </li>
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product25.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
					                      <span className="product-l__price">$125.00</span></div>
					                  </div>
					                </li>
					              </ul>
					            </div>
					          </div>
					          <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
					            <div className="column-product">
					              <span className="column-product__title u-c-secondary u-s-m-b-25">WEEKLY PRODUCTS</span>
					              <ul className="column-product__list">
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product26.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 10 Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00
					                        <span className="product-l__discount">$160</span></span></div>
					                  </div>
					                </li>
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product27.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 15 Ram 8GB</a></span>
					                      <span className="product-l__price">$125.00
					                        <span className="product-l__discount">$160</span></span></div>
					                  </div>
					                </li>
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product28.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 15 Ultra Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00
					                        <span className="product-l__discount">$160</span></span></div>
					                  </div>
					                </li>
					              </ul>
					            </div>
					          </div>
					          <div className="col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
					            <div className="column-product">
					              <span className="column-product__title u-c-secondary u-s-m-b-25">FLASH PRODUCTS</span>
					              <ul className="column-product__list">
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product29.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 20 Ultra Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00</span>
					                    </div>
					                  </div>
					                </li>
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product30.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 11 Ultra Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00</span>
					                    </div>
					                  </div>
					                </li>
					                <li className="column-product__item">
					                  <div className="product-l">
					                    <div className="product-l__img-wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block product-l__link" href="product-detail.html">
					                        <img className="aspect__img" src={require('../assets/images/product/electronic/product31.jpg').default.src} alt="" /></a></div>
					                    <div className="product-l__info-wrap">
					                      <div className="product-l__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="far fa-star" /><i className="far fa-star" /></div>
					                      <span className="product-l__category">
					                        <a href="shop-side-version-2.html">Electronics</a></span>
					                      <span className="product-l__name">
					                        <a href="product-detail.html">Razor Gear 10 Ultra Ram 16GB</a></span>
					                      <span className="product-l__price">$125.00</span>
					                    </div>
					                  </div>
					                </li>
					              </ul>
					            </div>
					          </div>
					        </div>
					      </div>
					    </div>
					    {/*====== End - Section Content ======*/}
					  </div>
					  {/*====== End - Section 8 ======*/}
					  {/*====== Section 9 ======*/}
					  <div className="u-s-p-b-60">
					    {/*====== Section Content ======*/}
					    <div className="section__content">
					      <div className="container">
					        <div className="row">
					          <div className="col-lg-4 col-md-6 u-s-m-b-30">
					            <div className="service u-h-100">
					              <div className="service__icon"><i className="fas fa-truck" /></div>
					              <div className="service__info-wrap">
					                <span className="service__info-text-1">Free Shipping</span>
					                <span className="service__info-text-2">Free shipping on all US order or order above $200</span></div>
					            </div>
					          </div>
					          <div className="col-lg-4 col-md-6 u-s-m-b-30">
					            <div className="service u-h-100">
					              <div className="service__icon"><i className="fas fa-redo" /></div>
					              <div className="service__info-wrap">
					                <span className="service__info-text-1">Shop with Confidence</span>
					                <span className="service__info-text-2">Our Protection covers your purchase from click to delivery</span></div>
					            </div>
					          </div>
					          <div className="col-lg-4 col-md-6 u-s-m-b-30">
					            <div className="service u-h-100">
					              <div className="service__icon"><i className="fas fa-headphones-alt" /></div>
					              <div className="service__info-wrap">
					                <span className="service__info-text-1">24/7 Help Center</span>
					                <span className="service__info-text-2">Round-the-clock assistance for a smooth shopping experience</span></div>
					            </div>
					          </div>
					        </div>
					      </div>
					    </div>
					    {/*====== End - Section Content ======*/}
					  </div>
					  {/*====== End - Section 9 ======*/}
					  {/*====== Section 10 ======*/}
					  <div className="u-s-p-b-60">
					    {/*====== Section Intro ======*/}
					    <div className="section__intro u-s-m-b-46">
					      <div className="container">
					        <div className="row">
					          <div className="col-lg-12">
					            <div className="section__text-wrap">
					              <h1 className="section__heading u-c-secondary u-s-m-b-12">LATEST FROM BLOG</h1>
					              <span className="section__span u-c-silver">START YOU DAY WITH FRESH AND LATEST NEWS</span>
					            </div>
					          </div>
					        </div>
					      </div>
					    </div>
					    {/*====== End - Section Intro ======*/}
					    {/*====== Section Content ======*/}
					    <div className="section__content">
					      <div className="container">
					        <div className="row">
					          <div className="col-lg-4 col-md-6 u-s-m-b-30">
					            <div className="bp-mini bp-mini--img u-h-100">
					              <div className="bp-mini__thumbnail">
					                {/*====== Image Code ======*/}
					                <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
					                  <img className="aspect__img" src={require('../assets/images/blog/post-2.jpg').default.src} alt="" /></a>
					                {/*====== End - Image Code ======*/}
					              </div>
					              <div className="bp-mini__content">
					                <div className="bp-mini__stat">
					                  <span className="bp-mini__stat-wrap">
					                    <span className="bp-mini__publish-date">
					                      <a>
					                        <span>25 February 2018</span></a></span></span>
					                  <span className="bp-mini__stat-wrap">
					                    <span className="bp-mini__preposition">By</span>
					                    <span className="bp-mini__author">
					                      <a href="#">Dayle</a></span></span>
					                  <span className="bp-mini__stat">
					                    <span className="bp-mini__comment">
					                      <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
					                        <span>8</span></a></span></span></div>
					                <div className="bp-mini__category">
					                  <a>Learning</a>
					                  <a>News</a>
					                  <a>Health</a></div>
					                <span className="bp-mini__h1">
					                  <a href="blog-detail.html">Life is an extraordinary Adventure</a></span>
					                <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					                <div className="blog-t-w">
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
					              </div>
					            </div>
					          </div>
					          <div className="col-lg-4 col-md-6 u-s-m-b-30">
					            <div className="bp-mini bp-mini--img u-h-100">
					              <div className="bp-mini__thumbnail">
					                {/*====== Image Code ======*/}
					                <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
					                  <img className="aspect__img" src={require('../assets/images/blog/post-12.jpg').default.src} alt="" /></a>
					                {/*====== End - Image Code ======*/}
					              </div>
					              <div className="bp-mini__content">
					                <div className="bp-mini__stat">
					                  <span className="bp-mini__stat-wrap">
					                    <span className="bp-mini__publish-date">
					                      <a>
					                        <span>25 February 2018</span></a></span></span>
					                  <span className="bp-mini__stat-wrap">
					                    <span className="bp-mini__preposition">By</span>
					                    <span className="bp-mini__author">
					                      <a href="#">Dayle</a></span></span>
					                  <span className="bp-mini__stat">
					                    <span className="bp-mini__comment">
					                      <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
					                        <span>8</span></a></span></span></div>
					                <div className="bp-mini__category">
					                  <a>Learning</a>
					                  <a>News</a>
					                  <a>Health</a></div>
					                <span className="bp-mini__h1">
					                  <a href="blog-detail.html">Wait till its open</a></span>
					                <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					                <div className="blog-t-w">
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
					              </div>
					            </div>
					          </div>
					          <div className="col-lg-4 col-md-6 u-s-m-b-30">
					            <div className="bp-mini bp-mini--img u-h-100">
					              <div className="bp-mini__thumbnail">
					                {/*====== Image Code ======*/}
					                <a className="aspect aspect--bg-grey aspect--1366-768 u-d-block" href="blog-detail.html">
					                  <img className="aspect__img" src={require('../assets/images/blog/post-5.jpg').default.src} alt="" /></a>
					                {/*====== End - Image Code ======*/}
					              </div>
					              <div className="bp-mini__content">
					                <div className="bp-mini__stat">
					                  <span className="bp-mini__stat-wrap">
					                    <span className="bp-mini__publish-date">
					                      <a>
					                        <span>25 February 2018</span></a></span></span>
					                  <span className="bp-mini__stat-wrap">
					                    <span className="bp-mini__preposition">By</span>
					                    <span className="bp-mini__author">
					                      <a href="#">Dayle</a></span></span>
					                  <span className="bp-mini__stat">
					                    <span className="bp-mini__comment">
					                      <a href="blog-detail.html"><i className="far fa-comments u-s-m-r-4" />
					                        <span>8</span></a></span></span></div>
					                <div className="bp-mini__category">
					                  <a>Learning</a>
					                  <a>News</a>
					                  <a>Health</a></div>
					                <span className="bp-mini__h1">
					                  <a href="blog-detail.html">Tell me difference between smoke and vape</a></span>
					                <p className="bp-mini__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
					                <div className="blog-t-w">
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Travel</a>
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Culture</a>
					                  <a className="gl-tag btn--e-transparent-hover-brand-b-2">Place</a></div>
					              </div>
					            </div>
					          </div>
					        </div>
					      </div>
					    </div>
					    {/*====== End - Section Content ======*/}
					  </div>
					  {/*====== End - Section 10 ======*/}
					  {/*====== Section 11 ======*/}
					  <div className="u-s-p-b-90 u-s-m-b-30">
					    {/*====== Section Intro ======*/}
					    <div className="section__intro u-s-m-b-46">
					      <div className="container">
					        <div className="row">
					          <div className="col-lg-12">
					            <div className="section__text-wrap">
					              <h1 className="section__heading u-c-secondary u-s-m-b-12">CLIENTS FEEDBACK</h1>
					              <span className="section__span u-c-silver">WHAT OUR CLIENTS SAY</span>
					            </div>
					          </div>
					        </div>
					      </div>
					    </div>
					    {/*====== End - Section Intro ======*/}
					    {/*====== Section Content ======*/}
					    <div className="section__content">
					      <div className="container">
					        {/*====== Testimonial Slider ======*/}
					        <div className="slider-fouc">
					          <div className="owl-carousel" id="testimonial-slider">
					            <div className="testimonial">
					              <div className="testimonial__img-wrap">
					                <img className="testimonial__img" src={require('../assets/images/about/test-1.jpg').default.src} alt="" /></div>
					              <div className="testimonial__content-wrap">
					                <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
					                <blockquote className="testimonial__block-quote">
					                  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
					                </blockquote>
					                <span className="testimonial__author">John D. / DVNTR Inc.</span>
					              </div>
					            </div>
					            <div className="testimonial">
					              <div className="testimonial__img-wrap">
					                <img className="testimonial__img" src={require('../assets/images/about/test-2.jpg').default.src} alt="" /></div>
					              <div className="testimonial__content-wrap">
					                <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
					                <blockquote className="testimonial__block-quote">
					                  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
					                </blockquote>
					                <span className="testimonial__author">John D. / DVNTR Inc.</span>
					              </div>
					            </div>
					            <div className="testimonial">
					              <div className="testimonial__img-wrap">
					                <img className="testimonial__img" src={require('../assets/images/about/test-3.jpg').default.src} alt="" /></div>
					              <div className="testimonial__content-wrap">
					                <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
					                <blockquote className="testimonial__block-quote">
					                  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
					                </blockquote>
					                <span className="testimonial__author">John D. / DVNTR Inc.</span>
					              </div>
					            </div>
					            <div className="testimonial">
					              <div className="testimonial__img-wrap">
					                <img className="testimonial__img" src={require('../assets/images/about/test-4.jpg').default.src} alt="" /></div>
					              <div className="testimonial__content-wrap">
					                <span className="testimonial__double-quote"><i className="fas fa-quote-right" /></span>
					                <blockquote className="testimonial__block-quote">
					                  <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."</p>
					                </blockquote>
					                <span className="testimonial__author">John D. / DVNTR Inc.</span>
					              </div>
					            </div>
					          </div>
					        </div>
					        {/*====== End - Testimonial Slider ======*/}
					      </div>
					    </div>
					    {/*====== End - Section Content ======*/}
					  </div>
					  {/*====== End - Section 11 ======*/}
					  {/*====== Section 12 ======*/}
					  <div className="u-s-p-b-60">
					    {/*====== Section Content ======*/}
					    <div className="section__content">
					      <div className="container">
					        {/*====== Brand Slider ======*/}
					        <div className="slider-fouc">
					          <div className="owl-carousel" id="brand-slider" data-item={5}>
					            <div className="brand-slide">
					              <a href="shop-side-version-2.html">
					                <img src={require('../assets/images/brand/b1.png').default.src} alt="" /></a></div>
					            <div className="brand-slide">
					              <a href="shop-side-version-2.html">
					                <img src={require('../assets/images/brand/b2.png').default.src} alt="" /></a></div>
					            <div className="brand-slide">
					              <a href="shop-side-version-2.html">
					                <img src={require('../assets/images/brand/b3.png').default.src} alt="" /></a></div>
					            <div className="brand-slide">
					              <a href="shop-side-version-2.html">
					                <img src={require('../assets/images/brand/b4.png').default.src} alt="" /></a></div>
					            <div className="brand-slide">
					              <a href="shop-side-version-2.html">
					                <img src={require('../assets/images/brand/b5.png').default.src} alt="" /></a></div>
					            <div className="brand-slide">
					              <a href="shop-side-version-2.html">
					                <img src={require('../assets/images/brand/b6.png').default.src} alt="" /></a></div>
					          </div>
					        </div>
					        {/*====== End - Brand Slider ======*/}
					      </div>
					    </div>
					    {/*====== End - Section Content ======*/}
					  </div>
					  {/*====== End - Section 12 ======*/}
				{/*====== End - App Content ======*/}
		    </Layout>
	)
}


Home.getInitialProps = wrapper.getInitialPageProps(store => async ({pathname, req, res}) => {
    // try {
	// 	const res = await api.post('/product/get-all-catalog');
	// 	const { data } = res;
	// 	store.dispatch(setAllCategory({
	// 		catalog: data.catalog,
	// 		subCatalog: data.subCatalog,
	// 		category: data.category
	// 	}));
	// 	if(data.catalog){
	// 		const { data } = await api.post('/product/get-product');
	// 		store.dispatch(setTabProducts(data));	
	// 	}else {
	// 		store.dispatch(setTabProducts(false));
	// 	}
	// } catch(e) {
	// 	store.dispatch(setAllCategory({
	// 		catalog: false,
	// 		subCatalog: false,
	// 		category: false
	// 	}));
	// 	store.dispatch(setTabProducts(false));
	// }
	// store.dispatch(setAllCategoryLoaded(true));
	return {}
});



export default Home;