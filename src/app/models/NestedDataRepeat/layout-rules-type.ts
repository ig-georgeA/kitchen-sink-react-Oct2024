import { SizingSupportedModesType } from './sizing-supported-modes-type';
import { InitialSizeType } from './initial-size-type';
import { DefaultItemLayoutType } from './default-item-layout-type';

export interface LayoutRulesType {
  isViewsContainer: boolean;
  initialSize: InitialSizeType;
  isContainer: boolean;
  initialPosition: string;
  initialMargin: string;
  initialPadding: string;
  sizingSupportedModes: SizingSupportedModesType;
  defaultItemLayout: DefaultItemLayoutType;
  defaultLayout: string;
}
