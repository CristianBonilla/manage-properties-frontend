export interface RouteDetail {
  upgrade: boolean;
  path: string;
  name: string;
  icon: string;
  component: (...props: any[]) => JSX.Element;
  redirect?: string;
}
