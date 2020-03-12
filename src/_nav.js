export default {
  items: [
    {
      name: 'داشبورد',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'جدید',
      },
    },
    {
      title: true,
      name: '* تم‌ها',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: { }        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: '‌رنگ‌ها',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'انواع سبک های نوشتن',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: '‌کامپوننت‌ها',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'اجزا اصلی',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: ' انواع ادرس محل فعلی',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع کارت‌',
          url: '/base/cards',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع اسلادر',
          url: '/base/carousels',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع کولپس‌',
          url: '/base/collapses',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع دروپ دون‌ ',
          url: '/base/dropdowns',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع فرم‌',
          url: '/base/forms',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع لیست گروهی',
          url: '/base/list-groups',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع زبانه‌',
          url: '/base/navs',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع صفحه بندی',
          url: '/base/paginations',
          icon: 'icon-puzzle',
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع نوار میزان پیشرفت',
          url: '/base/progress-bar',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع کلید',
          url: '/base/switches',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع جدول ‌',
          url: '/base/tables',
          icon: 'icon-puzzle',
        },
        {
          name: 'انواع تب بندی‌',
          url: '/base/tabs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'کلید‌',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'انواع کلید‌',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'چارت',
      url: '/charts',
      icon: 'icon-pie-chart',
    },
    {
      name: 'نماد و اشکال',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI ایکون های',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'انواع پرچم',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
        {
          name: 'ایکون های ساده',
          url: '/icons/simple-line-icons',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'پیام‌ها',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'انواع هشدار',
          url: '/notifications/alerts',
          icon: 'icon-bell',
        },
        {
          name: 'انواع روش برجسته کردن',
          url: '/notifications/badges',
          icon: 'icon-bell',
        },
        {
          name: 'انواع مودال',
          url: '/notifications/modals',
          icon: 'icon-bell',
        },
      ],
    },
    {
      name: 'ابزار های نمایش',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      divider: true,
    },
    {
      title: true,
      name: 'موارد اضافی',
    },
    {
      name: 'انواع صفحه',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'صفحه ورود',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'صفحه ثبت نام',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'ارور 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'ارور 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'غیرفعال',
      url: '/dashboard',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'دانلود CoreUI',
      url: 'https://coreui.io/react/',
      icon: 'icon-cloud-download',
      class: 'mt-auto',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Try CoreUI PRO',
      url: 'https://coreui.io/pro/react/',
      icon: 'icon-layers',
      variant: 'danger',
      attributes: { target: '_blank', rel: "noopener" },
    },
  ],
};
