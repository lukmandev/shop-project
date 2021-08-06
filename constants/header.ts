interface iNavType{
	to: string;
	text: string;
	dropdownId?: string
}
interface IChildNav{
	[key: string]: iNavType[]
}

interface IHeaderAuth{
	to: string;
	text: string;
	icon: string;
}


export const mainNav: iNavType[] = [
	{
		to: '/',
		text: 'NEW ARRIVALS',
	},
	{
		to: '',
		text: 'PAGES',
		dropdownId: 'PAGES'
	},
	{
		to: '',
		text: 'BLOG',
		dropdownId: 'BLOG'
	},
	{
		to: '/',
		text: 'VALUE OF THE DAY',
	},
	{
		to: '/',
		text: 'GIFT CARDS',
	}
];

export const dropdownNav: IChildNav = {
	PAGES: [
			{
				to: '',
				text: 'Home',
				dropdownId: 'HOME'
			},
			{
				to: '',
				text: 'Account',
				dropdownId: 'ACCOUNT'
			},
			{
				to: '',
				text: 'Dashboard',
				dropdownId: 'DASHBOARD'
			},
			{
				to: '',
				text: 'Empty',
				dropdownId: 'EMPTY'
			},
			{
				to: '',
				text: 'Product Details',
				dropdownId: 'PRODUCTDETAILS'
			},
			{
				to: '',
				text: 'Shop Grid Layout',
				dropdownId: 'SHOPGRIDDETAILS'
			},
			{
				to: '',
				text: 'Shop List Layout',
				dropdownId: 'SHOPLISTDETAILS'
			},
			{
				to: '/cart',
				text: 'Cart',
			},
			{
				to: '/wishlist',
				text: 'Wishlist',
			},
			{
				to: '/checkout',
				text: 'Checkout',
			},
			{
				to: '/faq',
				text: 'FAQ',
			},
			{
				to: '/about',
				text: 'About us',
			},
			{
				to: '/contact',
				text: 'Contact',
			},
			{
				to: '/404',
				text: '404',
			},
		],
	BLOG: [
		{
			to: '/blog-left-sidebar',
			text: 'Blog Left Sidebar',
		},
		{
			to: '/blog-right-sidebar',
			text: 'Blog Right Sidebar',
		},
		{
			to: '/blog-sidebar-none',
			text: 'Blog Sidebar none',
		},
		{
			to: '/blog-masonry',
			text: 'Blog Masonry',
		},
		{
			to: '/blog-details',
			text: 'Blog Details',
		}
	]
}

export const dropdownChildNav: IChildNav = {
	HOME: [
		{
			to: '/home-1',
			text: 'Home 1'
		},
		{
			to: '/home-2',
			text: 'Home 2'
		},
		{
			to: '/home-3',
			text: 'Home 3'
		},
	],
	ACCOUNT: [
		{
			to: '/signin',
			text: 'Sign-in/Already registered'
		},
		{
			to: '/signup',
			text: 'Sign-up/Register'
		},
		{
			to: '/lost-password',
			text: 'Lost Password'
		}
	],
	DASHBOARD: [
		{
			to: '/dashboard',
			text: 'Manage My Account',
			dropdownId: 'MANAGEACCOUNT',
		},
		{
			to: '/my-profile',
			text: 'My Profile',
		},
		{
			to: '/address-book',
			text: 'Address Book',
			dropdownId: 'ADDRESSBOOK'
		},
		{
			to: '/track-order',
			text: 'Track Order',
		},
		{
			to: '/my-orders',
			text: 'My Orders',
		},
		{
			to: '/payment-option',
			text: 'My Payment Option',
		},
		{
			to: '/cancellation',
			text: 'My Return & Cancellation',
		}
	],
	EMPTY: [
		{
			to: '/empty-search',
			text: 'Empty Search',
		},
		{
			to: '/empty-cart',
			text: 'Empty Cart',
		},
		{
			to: '/empty-wishlist',
			text: 'Empty Wishlist',
		}
	],
	PRODUCTDETAILS: [
		{
			to: 'product-detail',
			text: 'Product Detail'
		},
		{
			to: 'product-detail-variable',
			text: 'Product Detail Variable'
		},
		{
			to: 'product-detail-affiliate',
			text: 'Product Detail Affiliate'
		}
	],
	SHOPGRIDDETAILS: [
		{
			to: '/shop-grid-left-sidebar',
			text: 'Shop Grid Left Sidebar'
		},
		{
			to: '/shop-grid-right-sidebar',
			text: 'Shop Grid Right Sidebar'
		},
		{
			to: '/shop-grid-full-width',
			text: 'Shop Grid Full Width'
		},
		{
			to: '/shop-grid-side-version-2',
			text: 'Shop Grid Side Version'
		}
	],
	SHOPLISTDETAILS: [
		{
			to: '/shop-list-left-sidebar',
			text: 'Shop List Left Sidebar'
		},
		{
			to: '/shop-list-right-sidebar',
			text: 'Shop List Right Sidebar'
		},
		{
			to: '/shop-list-full-width',
			text: 'Shop List Full Width'
		}
	]
}

export const childDropdownNav: IChildNav = {
	MANAGEACCOUNT: [
		{
			to: '/edit-profile',
			text: 'Edit Profile'
		},
		{
			to: '/edit-adress-book',
			text: 'Edit Address Book'
		},
		{
			to: '/manage-order',
			text: 'Manage Order'
		}
	],
	ADDRESSBOOK: [
		{
			to: '/address-make-default',
			text: 'Address Make Default'
		},
		{
			to: '/add-new-address',
			text: 'Add New Address'
		},
		{
			to: '/edit-address-book',
			text: 'Edit Address Book'
		}
	]
}

export const headerAuthTypes: IHeaderAuth[] = [
	{
		to: '/account',
		text: 'Account',
		icon: 'fas fa-user-circle u-s-m-r-6'
	},
	{
		to: '/signup',
		text: 'Signup',
		icon: 'fas fa-user-plus u-s-m-r-6'
	},
	{
		to: '/signin',
		text: 'Signin',
		icon: 'fas fa-lock u-s-m-r-6'
	},
	{
		to: '/signout',
		text: 'Signout',
		icon: 'fas fa-lock-open u-s-m-r-6'
	},
]