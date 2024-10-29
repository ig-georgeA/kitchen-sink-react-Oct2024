import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrChip, IgrChipModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrCellTemplateContext, IgrColumn, IgrGrid, IgrGridModule } from '@infragistics/igniteui-react-grids';
import { useGetCustomerDtoList, useGetEmployeeDtoList } from '../hooks/ignorthwind-api-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './grid-with-templates.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrChipModule.register();
IgrGridModule.register();
IgrRippleModule.register();

export default function GridWithTemplates() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { iGNorthwindAPICustomerDto: grid_variable } = useGetCustomerDtoList();
  const { iGNorthwindAPIEmployeeDto } = useGetEmployeeDtoList();

  const columnBodyTemplate = (ctx: { dataContext: IgrCellTemplateContext }) => {
    return (
      <>
        <div className={classes("row-layout group_1")}>
          <IgrAvatar src={ctx.dataContext.cell.row.data.avatarUrl} shape="rounded" className={classes("avatar")}></IgrAvatar>
          <p className={classes("typography__body-2 text")}>
            <span>{ctx.dataContext.cell.row.data.firstName}</span>
          </p>
          <p className={classes("typography__body-2 text")}>
            <span>{ctx.dataContext.cell.value}</span>
          </p>
        </div>
      </>
    )
  }

  const columnBodyTemplate1 = () => {
    return (
      <>
      </>
    )
  }

  const columnBodyTemplate2 = (ctx: { dataContext: IgrCellTemplateContext }) => {
    return (
      <>
        <IgrChip className={classes("chip")}>
          <span slot="prefix" key={uuid()}>
            <span className={classes("material-icons icon")} key={uuid()}>
              <span key={uuid()}>phone</span>
            </span>
          </span>
          <span key={uuid()}>{ctx.dataContext.cell.value}</span>
        </IgrChip>
      </>
    )
  }

  const columnBodyTemplate3 = () => {
    return (
      <>
        <IgrButton variant="flat" className={classes("button")}>
          <span key={uuid()}>View details</span>
          <span className={classes("material-icons")} key={uuid()}>
            <span key={uuid()}>arrow_forward</span>
          </span>
          <IgrRipple key={uuid()}></IgrRipple>
        </IgrButton>
      </>
    )
  }

  return (
    <>
      <div className={classes("row-layout grid-with-templates-container")}>
        <div className={classes("column-layout group")}>
          <IgrGrid data={iGNorthwindAPIEmployeeDto} primaryKey="employeeId" rowSelection="multiple" rowEditable="true" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")} key={uuid()}>
            <IgrColumn field="lastName" dataType="string" header="Employee name" width="212px" pinned="true" groupable="true" sortable="true" resizable="true" bodyTemplate={columnBodyTemplate} selectable="false"></IgrColumn>
            <IgrColumn field="title" dataType="string" header="Job title" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.region" dataType="string" header="State" width="179px" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn field="address.city" header="City" width="209px" groupable="true" sortable="true" resizable="true" bodyTemplate={columnBodyTemplate1} selectable="false"></IgrColumn>
            <IgrColumn field="address.phone" dataType="string" header="Phone" groupable="true" sortable="true" resizable="true" bodyTemplate={columnBodyTemplate2} selectable="false"></IgrColumn>
            <IgrColumn field="hireDate" header="Hire date" width="189px" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
            <IgrColumn width="203px" groupable="true" sortable="true" resizable="true" bodyTemplate={columnBodyTemplate3} selectable="false" key="f3209e54-4565-4004-b04e-15125e22f8c8"></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}
