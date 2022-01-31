import { RouteDetail } from '@models/route-detail';
import { Properties } from '@components/Properties';

export const ROUTES: RouteDetail[] = [
  {
    path: '/properties',
    name: 'Propiedades',
    icon: '',
    component: Properties,
    upgrade: false
  }
];
