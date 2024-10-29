import { IgrCombo, IgrComboModule, IgrSelect, IgrSelectItem, IgrSelectModule } from '@infragistics/igniteui-react';
import { IgrXDatePicker, IgrXDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useState } from 'react';
import { useGetCustomerDtoList, useGetEmployeeDtoList } from '../hooks/ignorthwind-api-hooks';
import styles from './pickers-combo.module.css';
import createClassTransformer from '../style-utils';

IgrComboModule.register();
IgrSelectModule.register();
IgrXDatePickerModule.register();

export default function PickersCombo() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('3');
  const { iGNorthwindAPIEmployeeDto } = useGetEmployeeDtoList();
  const { iGNorthwindAPICustomerDto } = useGetCustomerDtoList();

  return (
    <>
      <div className={classes("row-layout pickers-combo-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-1 text")}>
              <span>Select</span>
            </p>
            <IgrSelect outlined="true" label="Employees" placeholder="Select a value" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              {iGNorthwindAPIEmployeeDto?.map((item) => (
                <IgrSelectItem value="Option" key={uuid()}>
                  <span key={uuid()}>{item.lastName}</span>
                </IgrSelectItem>
              ))}
            </IgrSelect>
            <IgrSelect outlined="false" label="Label/Placeholder" placeholder="pick a value" className={classes("user-input")}>
              <IgrSelectItem value="Option" key="059ea5b4-14f8-417b-b0c0-b0015e1f3c96">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined="true" label="Label/Placeholder" placeholder="pick a value" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
              <IgrSelectItem value="1" key="07743c59-197f-4ede-8c89-29ad8dadd4d7">
                <span key={uuid()}>Android</span>
              </IgrSelectItem>
              <IgrSelectItem value="2" key="a59288d3-45e9-41f6-b44c-9750c0ba4980">
                <span key={uuid()}>iOS</span>
              </IgrSelectItem>
              <IgrSelectItem value="3" key="c2150ce0-9a84-4b81-ad02-2df4d109fbca">
                <span key={uuid()}>Web</span>
              </IgrSelectItem>
            </IgrSelect>
            <IgrSelect outlined="true" label="Options" placeholder="Select a value" className={classes("user-input")}>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>date_range</span>
                </span>
              </span>
              <IgrSelectItem value="Option" key="328f3369-b22f-43d1-afb5-02522849152d">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="5b421909-9043-4dcf-a2e2-5c4b27f78879">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <IgrSelectItem value="Option" key="f7965730-cbdd-4231-91e9-72ab9251d6a0">
                <span key={uuid()}>Option</span>
              </IgrSelectItem>
              <span slot="helper-text" key={uuid()}>Show help text here</span>
            </IgrSelect>
            <IgrSelect outlined="false" label="I have a label" disabled="true" className={classes("user-input")}>
              <span slot="helper-text" key={uuid()}>disabled</span>
            </IgrSelect>
          </div>
          <div className={classes("column-layout group_1")}>
            <p className={classes("typography__subtitle-1 text")}>
              <span>Combo</span>
            </p>
            <IgrCombo outlined="true" data={iGNorthwindAPICustomerDto} label="Categories" placeholder="no label + placeholder + multi_select" displayKey="customerId" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="helper-text" key={uuid()}>sample hint text</span>
            </IgrCombo>
            <IgrCombo outlined="true" data={iGNorthwindAPICustomerDto} label="Label/Placeholder" placeholder="simple combo" displayKey="companyName" singleSelect="true" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo outlined="true" data={iGNorthwindAPICustomerDto} label="Description" placeholder="disabled combo" disabled="true" displayKey="customerId" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
              <span slot="suffix" key={uuid()}>
                <span className={classes("material-icons icon_1")} key={uuid()}>
                  <span key={uuid()}>warning</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={iGNorthwindAPIEmployeeDto} label="Names" placeholder="Box-style combo" displayKey="lastName" required outlined="false" singleSelect="true" className={classes("user-input")}>
              <span slot="prefix" key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>person</span>
                </span>
              </span>
            </IgrCombo>
            <IgrCombo data={iGNorthwindAPIEmployeeDto} placeholder="Box-style combo + disabled" disabled="true" displayKey="lastName" required outlined="false" singleSelect="true" className={classes("user-input")}></IgrCombo>
            <div className={classes("group_2")}>
              <IgrXDatePicker label="Date"></IgrXDatePicker>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
