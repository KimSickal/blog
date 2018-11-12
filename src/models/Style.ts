import {
    FlexDirectionProperty,
    AlignItemsProperty,
    DisplayProperty,
    TextAlignProperty,
    JustifyContentProperty,
} from 'csstype';

export interface Style {
    display?: DisplayProperty;

    flex?: string | number;

    flexDirection?: FlexDirectionProperty;

    alignItems?: AlignItemsProperty;
    justifyContent?: JustifyContentProperty;

    textAlign?: TextAlignProperty;
}