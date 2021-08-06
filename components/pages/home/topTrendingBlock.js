import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../http/api.js';

import Item from '../../product-item/home/home-trending/item.js';

import { Index } from '../../../constants/context/index.js';



const Tab = ({ item, active }) => {

	return (
		<div className="filter__category-wrapper">
			<button 
				className={active ? "btn filter__btn filter__btn--style-1 js-checked" : "btn filter__btn filter__btn--style-1"} 
				type="button" 
				catalog-id={item.catalogId}
				onClick={changeTab}
			>
				{item.text}
			</button>
		</div>
	);
}



const Block = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return {
			allCatalogInfo: state.main.allCatalogInfo,
			allCatalogLoaded: state.main.allCatalogLoaded,
			activeTab: state.home.activeTab,
			tabProducts: state.home.tabProducts,
			tabProductsLoaded: state.home.tabProductsLoaded
		}
	});

	// 'USE EFFECTS'

	// 'OTHERS'
	const fetchToProduct = useCallback(async () => {
		try{
			const { data } = await api.post('/product/get-product');

		}catch(e){

		}
	}, []);

	// 'HANDLERS'
	const changeTab = (e) => {
		const id = e.target.closest('button.filter__btn').getAttribute('catalog-id');
		if(id === "all"){

		}
	}

	// 'OUTS'
	const outTabs = () => {
		if(state.allCatalogLoaded){
			return state.allCatalogInfo.map((elem, i) => {
				return <Tab active={elem.catalogId === activeTab} />
			});
		}else {
			return <h1>LOADING ...</h1>
		}
	}
	const outProduct = () => {
		return <h1>PRODUCT</h1>
	}

	return (
		<div className="u-s-p-b-60">
		 	{/*====== Section Intro ======*/}
			<div className="section__intro u-s-m-b-16">
				<div className="container">
					<div className="row">
					    <div className="col-lg-12">
					       	<div className="section__text-wrap">
					            <h1 className="section__heading u-c-secondary u-s-m-b-12">TOP TRENDING</h1>
					            <span className="section__span u-c-silver">CHOOSE CATEGORY</span>
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
					    <div className="col-lg-12">
					    	<div className="filter-category-container">
					            {/* {outTabs()} */}
					        </div>
					            <div className="filter__grid-wrapper u-s-m-t-30">
					              <div className="row">
					                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item headphone">
					                  <div className="product-o product-o--hover-on product-o--radius">
					                    <div className="product-o__wrap">
					                      <a className="aspect aspect--bg-grey aspect--square u-d-block" href="product-detail.html">
					                        <img className="aspect__img" src={require('../../../assets/images/product/electronic/product2.jpg').default.src} alt="" /></a>
					                      <div className="product-o__action-wrap">
					                        <ul className="product-o__action-list">
					                          <li>
					                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View"><i className="fas fa-search-plus" /></a></li>
					                          <li>
					                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart"><i className="fas fa-plus-circle" /></a></li>
					                          <li>
					                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist"><i className="fas fa-heart" /></a></li>
					                          <li>
					                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops"><i className="fas fa-envelope" /></a></li>
					                        </ul>
					                      </div>
					                    </div>
					                    <span className="product-o__category">
					                      <a href="shop-side-version-2.html">Electronics</a></span>
					                    <span className="product-o__name">
					                      <a href="product-detail.html">Red Wireless Headphone</a></span>
					                    <div className="product-o__rating gl-rating-style"><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star-half-alt" />
					                      <span className="product-o__review">(23)</span></div>
					                    <span className="product-o__price">$125.00
					                      <span className="product-o__discount">$160.00</span></span>
					                  </div>
					                </div>
					                {Array(10).fill(0).map((elem, i) => {
					                	return <Item />
					                })}
					              </div>
					            </div>
					          </div>
					          <div className="col-lg-12">
					            <div className="load-more">
					              <button className="btn btn--e-brand" type="button">Load More</button></div>
					          </div>
					        </div>
					      </div>
			</div>
			{/*====== End - Section Content ======*/}
		</div>
	)
}


export default Block;