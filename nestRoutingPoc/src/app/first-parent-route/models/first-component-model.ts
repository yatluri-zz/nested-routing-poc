import { SiteTemplate } from '@admin/models/site-template';
import { ColorList } from '../interfaces/ColorList';
export class FirstComponentModel {
  siteSorts: Array<string> = ['A-Z', 'Z-A'];
  Filters: Array<string> = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Ipsum'
  ];
  mediaList: Array<SiteTemplate> = [];
  previousMiddleElement: HTMLElement;
  colorList: Array<ColorList> = [
    {
      name: 'black',
      value: 1
    },
    {
      name: 'yellow',
      value: 2
    },
    {
      name: 'green',
      value: 3
    },
    {
      name: 'orange',
      value: 4
    },
    {
      name: 'red',
      value: 5
    },
    {
      name: 'silver',
      value: 6
    },
    {
      name: 'brown',
      value: 7
    }
  ];
  isCheckMark: boolean = false;
}
