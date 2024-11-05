import { IgrAvatar, IgrAvatarModule, IgrBadge, IgrBadgeModule, IgrButton, IgrButtonGroup, IgrButtonGroupModule, IgrButtonModule, IgrCheckbox, IgrCheckboxModule, IgrChip, IgrChipModule, IgrDateTimeInput, IgrDateTimeInputModule, IgrIconButton, IgrIconButtonModule, IgrInput, IgrInputModule, IgrRadio, IgrRadioGroup, IgrRadioGroupModule, IgrRadioModule, IgrRangeSlider, IgrRangeSliderModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule, IgrSlider, IgrSliderModule, IgrSwitch, IgrSwitchModule, IgrTextarea, IgrTextareaModule, IgrToggleButton, IgrToggleButtonModule } from '@infragistics/igniteui-react';
import { IgrXDatePicker, IgrXDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGetCategories } from '../hooks/northwind-hooks';
import styles from './inputs.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrBadgeModule.register();
IgrButtonGroupModule.register();
IgrButtonModule.register();
IgrCheckboxModule.register();
IgrChipModule.register();
IgrDateTimeInputModule.register();
IgrIconButtonModule.register();
IgrInputModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();
IgrRangeSliderModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrSliderModule.register();
IgrSwitchModule.register();
IgrTextareaModule.register();
IgrToggleButtonModule.register();
IgrXDatePickerModule.register();

export default function Inputs() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const date = new Date('2021-03-16T00:00');
  const [value, setValue] = useState<number | undefined>(50);
  const [value1, setValue1] = useState<number | undefined>(25);
  const [value2, setValue2] = useState<number | undefined>(0);
  const [value3, setValue3] = useState<number | undefined>(3);
  const [value4, setValue4] = useState<string | undefined>('some content');
  const [value5, setValue5] = useState<Date | undefined>(new Date('2024-06-12T00:00'));
  const [checked, setChecked] = useState<boolean | undefined>(true);
  const [value6, setValue6] = useState<string | undefined>('1');
  const { northwindCategories } = useGetCategories();

  return (
    <>
      <div className={classes("row-layout inputs-container")}>
        <div className={classes("column-layout column-layout_1")}>
          <IgrInput type="email" label="Email address" required outlined="false" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>mail</span>
              </span>
            </span>
          </IgrInput>
          <IgrInput label="I'm disabled" disabled="true" required outlined="false" className={classes("input")}></IgrInput>
          <IgrInput label="Label +prefix+box+help" required outlined="false" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <IgrInput label="Label" placeholder="Label/Placeholder" required outlined="false" className={classes("input")}></IgrInput>
          <IgrDateTimeInput value={date} label="Date-box style-input format 1" required outlined="false" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput value={date} label="Date-box style - input format 2" required outlined="false" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrTextarea placeholder="Type here" required outlined="false" className={classes("textarea")}></IgrTextarea>
          <div className={classes("group")}>
            <IgrXDatePicker label="Date picker"></IgrXDatePicker>
          </div>
          <div className={classes("row-layout group_1")}>
            <IgrChip className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip className={classes("chip")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>place</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons icon_2")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
            <IgrChip disabled="true" className={classes("chip_1")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>account_balance</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>clear</span>
                </span>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <div className={classes("row-layout group_2")}>
            <IgrChip className={classes("chip_2")}>
              <span slot="prefix" key={uuid()}>
                <IgrAvatar initials="AB" shape="circle" className={classes("avatar_4")} key={uuid()}></IgrAvatar>
              </span>
              <span key={uuid()}>Country</span>
            </IgrChip>
          </div>
          <div className={classes("column-layout group_3")}>
            <IgrSlider min="0" max="100" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider")}></IgrSlider>
            <IgrRangeSlider lower="20" upper="80" min="0" max="100" step="10" discreteTrack="true" className={classes("range-slider")}></IgrRangeSlider>
            <IgrSlider disabled="true" min="0" max="100" primaryTicks="3" secondaryTicks="2" hideSecondaryLabels="false" value={value1} change={(_c, e) => setValue1(e.detail)} className={classes("slider")}></IgrSlider>
            <IgrSlider min="0" max="100" step="10" primaryTicks="5" discreteTrack="true" value={value} change={(_c, e) => setValue(e.detail)} className={classes("slider_1")}></IgrSlider>
            <IgrSlider min="0" max="100" step="10" primaryTicks="3" secondaryTicks="1" tickOrientation="mirror" discreteTrack="true" value={value2} change={(_c, e) => setValue2(e.detail)} className={classes("slider")}></IgrSlider>
          </div>
          <div className={classes("row-layout group_4")}>
            <IgrAvatar initials="GM" shape="circle" className={classes("avatar_1 avatar_1_1")}></IgrAvatar>
            <IgrAvatar src="/src/assets/Avatar2.png" className={classes("avatar_2 avatar_2_1")}></IgrAvatar>
            <IgrAvatar shape="circle" className={classes("avatar_3")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>people</span>
              </span>
            </IgrAvatar>
          </div>
          <div className={classes("row-layout group_5")}>
            <span className={classes("material-icons icon_1")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_3")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_4")}>
              <span key={uuid()}>person</span>
            </span>
            <span className={classes("material-icons icon_5")}>
              <span key={uuid()}>person</span>
            </span>
            <IgrRating hoverPreview="true" value={value3} change={(_c, e) => setValue3(e.detail)} className={classes("rating")}></IgrRating>
          </div>
        </div>
        <div className={classes("column-layout group_6")}>
          <IgrInput label="Label" placeholder="Label + prefix + suffix + border" required outlined="true" className={classes("input")}>
            <span slot="prefix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>https://</span>
              </p>
            </span>
            <span slot="suffix" key={uuid()}>
              <p className={classes("typography__body-2 text")} key={uuid()}>
                <span>.com</span>
              </p>
            </span>
          </IgrInput>
          <IgrInput label="Label + required" required outlined="true" value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("input")}></IgrInput>
          <IgrInput label="I'm disabled" disabled="true" required outlined="true" className={classes("input")}></IgrInput>
          <IgrInput label="Label" required outlined="true" className={classes("input")}></IgrInput>
          <IgrInput label="Prefix, helptext and border" required outlined="true" className={classes("input_1")}>
            <span slot="prefix" key={uuid()}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
            </span>
            <span slot="helper-text" key={uuid()}>sample hint text</span>
          </IgrInput>
          <div className={classes("group")}>
            <IgrXDatePicker label="Date picker"></IgrXDatePicker>
          </div>
          <div className={classes("group")}>
            <IgrXDatePicker label="Date picker 2" value={value5} selectedValueChanged={(_c, e) => setValue5(e.newValue)}></IgrXDatePicker>
          </div>
          <IgrDateTimeInput value={date} label="Date editor" required outlined="true" className={classes("date-time-input")}></IgrDateTimeInput>
          <IgrDateTimeInput value={date} label="Time editor" required outlined="true" className={classes("date-time-input")}></IgrDateTimeInput>
          <div className={classes("row-layout group_7")}>
            <IgrButton clicked={() => navigate(`/lists-data`)} className={classes("button")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>star</span>
              </span>
              <span key={uuid()}>Lists</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="flat" className={classes("button_1")}>
              <span key={uuid()}>Button</span>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton variant="outlined" disabled="true" className={classes("button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <span key={uuid()}>Button</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrIconButton variant="flat" className={classes("icon-button icon-button_1")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>edit_calendar</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrIconButton variant="flat" className={classes("icon-button icon-button_2")}>
              <span className={classes("material-icons icon_6")} key={uuid()}>
                <span key={uuid()}>edit_calendar</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <IgrButton variant="fab" className={classes("user-input")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>add</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <div className={classes("row-layout group_8")}>
              <div className={classes("row-layout group_9")}>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>email</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrBadge variant="success" className={classes("badge")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>check</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_9")}>
                <IgrAvatar src="/src/assets/Avatar2.png" shape="circle" className={classes("avatar_3 avatar_3_1")}></IgrAvatar>
                <IgrBadge variant="warning" className={classes("badge_1")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>thumb_up</span>
                  </span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_9")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>mail</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge")}>
                  <span key={uuid()}>999</span>
                </IgrBadge>
              </div>
              <div className={classes("row-layout group_9")}>
                <span className={classes("material-icons icon_3")}>
                  <span key={uuid()}>notifications</span>
                </span>
                <IgrBadge variant="danger" className={classes("badge_2")}></IgrBadge>
              </div>
              <IgrBadge variant="success" className={classes("badge_3")}>
                <span key={uuid()}>Accepted</span>
              </IgrBadge>
              <IgrBadge variant="danger" className={classes("badge_3")}>
                <span key={uuid()}>Denied</span>
              </IgrBadge>
              <div className={classes("row-layout group_9")}>
                <IgrIconButton variant="flat">
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>email</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrBadge variant="danger" className={classes("badge_4")}></IgrBadge>
              </div>
            </div>
            <a href="https://www.youtube.com/playlist?list=PLZ4rRHIJepBuKeP2WqXZUtG8LAYmyHHsa" className={classes("typography__body-1 hyperlink")}>
              <span>YouTube playlist</span>
            </a>
          </div>
          <div className={classes("column-layout group_10")}>
            <div className={classes("row-layout group_11")}>
              <IgrButtonGroup className={classes("button-group")}>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_left</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_center</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton selected="true" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_align_right</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrButtonGroup className={classes("button-group_1")}>
                <IgrToggleButton key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_bold</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton disabled="true" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_italic</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
                <IgrToggleButton disabled="true" key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>format_underlined</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrToggleButton>
              </IgrButtonGroup>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("user-input_1")}>
                <span key={uuid()}>Notify me</span>
              </IgrSwitch>
              <IgrSwitch checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("user-input_1")}></IgrSwitch>
            </div>
            <div className={classes("row-layout group_12")}>
              <IgrCheckbox checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}></IgrCheckbox>
              <IgrCheckbox labelPosition="after" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("checkbox")}>
                <span key={uuid()}>Does it work?</span>
              </IgrCheckbox>
              <IgrCheckbox labelPosition="before" checked={checked} change={(_c, e) => setChecked(e.detail.checked)} className={classes("user-input")}>
                <span key={uuid()}>How about now?</span>
              </IgrCheckbox>
            </div>
          </div>
          <div className={classes("row-layout group_13")}>
            <IgrRadioGroup value={value6} change={(_c, e) => setValue6(e.detail.value)} className={classes("radio-group")}>
              <IgrRadio value="1" key="c87c0d22-576f-431f-b40a-42ed105106e4" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="2" key="fc50a4ff-5088-45e2-b496-1321939af20e" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" key="cd8dc0d4-d20b-4057-8cf5-b13d22fe06bc" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
            <IgrRadioGroup alignment="horizontal" value={value6} change={(_c, e) => setValue6(e.detail.value)} className={classes("user-input_1")}>
              {northwindCategories?.map(() => (
                <IgrRadio value="1" className={classes("radio")} key={uuid()}>
                  <span key={uuid()}>Label</span>
                </IgrRadio>
              ))}
              <IgrRadio value="2" key="42acc7a7-f02c-47b8-a576-65fb9bab8a26" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
              <IgrRadio value="3" key="ae7207ca-6056-48be-8907-f8ef0f8207b7" className={classes("radio")}>
                <span key={uuid()}>Label</span>
              </IgrRadio>
            </IgrRadioGroup>
          </div>
          <div className={classes("row-layout group_14")}>
            <IgrInput label="Group name" required outlined="true" value={value4} change={(_c, e) => setValue4(e.detail)} className={classes("input_2")}></IgrInput>
            <IgrButton variant="outlined" className={classes("button_2")}>
              <span className={classes("material-icons")} key={uuid()}>
                <span key={uuid()}>check</span>
              </span>
              <span key={uuid()}>Submit</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
          <div className={classes("group")}>
            <IgrXDatePicker label="Date"></IgrXDatePicker>
          </div>
        </div>
      </div>
    </>
  );
}
