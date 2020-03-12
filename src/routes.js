import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'خانه' },
  { path: '/dashboard', name: 'داشبورد', component: Dashboard },
  { path: '/theme', exact: true, name: 'تم', component: Colors },
  { path: '/theme/colors', name: 'رنگ‌ها', component: Colors },
  { path: '/theme/typography', name: 'تایپوگرافی', component: Typography },
  { path: '/base', exact: true, name: 'بیس', component: Cards },
  { path: '/base/cards', name: 'کارت‌ها', component: Cards },
  { path: '/base/forms', name: 'فرم‌ها', component: Forms },
  { path: '/base/switches', name: 'کلید‌ها', component: Switches },
  { path: '/base/tables', name: 'جدول‌ها', component: Tables },
  { path: '/base/tabs', name: 'زبانه‌ها', component: Tabs },
  { path: '/base/breadcrumbs', name: 'آدرس محل فعلی', component: Breadcrumbs },
  { path: '/base/carousels', name: 'اسلایدر یا کاروسل', component: Carousels },
  { path: '/base/collapses', name: 'کولپس', component: Collapses },
  { path: '/base/dropdowns', name: 'دروپ دون', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'لیست گروهی', component: ListGroups },
  { path: '/base/navbars', name: 'انواع زبانه‌ها', component: Navbars },
  { path: '/base/navs', name: 'زبانه‌ها', component: Navs },
  { path: '/base/paginations', name: 'صفحه بندی', component: Paginations },
  { path: '/base/popovers', name: 'پاپ اور', component: Popovers },
  { path: '/base/progress-bar', name: 'نوار میزان پیشرفت', component: ProgressBar },
  { path: '/base/tooltips', name: 'تول تیپ', component: Tooltips },
  { path: '/buttons', exact: true, name: 'کمه‌ها', component: Buttons },
  { path: '/buttons/buttons', name: 'کلیدها', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'کمه‌های کشویی به پایین', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'دکمه‌های گروهی', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'دکمه‌های انواع برند', component: BrandButtons },
  { path: '/icons', exact: true, name: 'نماد‌ها', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'نماد‌هایCoreUI', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'نماد‌های ساده', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'هشدار', component: Alerts },
  { path: '/notifications/badges', name: 'برجسته‌ سازی', component: Badges },
  { path: '/notifications/modals', name: 'مودال', component: Modals },
  { path: '/widgets', name: 'ویجت‌ها', component: Widgets },
  { path: '/charts', name: 'چارت‌ها', component: Charts },
  { path: '/users', exact: true,  name: 'کاربران', component: Users },
  { path: '/users/:id', exact: true, name: 'جزئیات کاربر', component: User },
];

export default routes;
