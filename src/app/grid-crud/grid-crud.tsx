import { IgrActionStrip, IgrActionStripModule, IgrColumn, IgrGrid, IgrGridBaseDirective, IgrGridEditDoneEventArgs, IgrGridEditingActions, IgrGridModule, IgrGridPinningActions, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarTitle, IgrRowDataEventArgs } from '@infragistics/igniteui-react-grids';
import { deleteCustomerDto, putCustomerDto } from '../services/ignorthwind-api';
import { useGetCustomerDtoList } from '../hooks/ignorthwind-api-hooks';
import '@infragistics/igniteui-react-grids/grids';
import styles from './grid-crud.module.css';
import createClassTransformer from '../style-utils';

IgrActionStripModule.register();
IgrGridModule.register();

export default function GridCRUD() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const { requestIGNorthwindAPICustomerDto, iGNorthwindAPICustomerDto } = useGetCustomerDtoList();

  function customersRowDeleted(_s: IgrGridBaseDirective, args: IgrRowDataEventArgs) {
    deleteCustomerDto(args.detail.primaryKey).then((res) => {
      if (res) {
        requestIGNorthwindAPICustomerDto();
      } else {
        // TODO: handle error here!
      }
    });
  }

  function customersRowEditDone(_s: IgrGridBaseDirective, args: IgrGridEditDoneEventArgs) {
    if (!args.detail.isAddRow) {
      putCustomerDto(args.detail.rowData).then((res) => {
        if (res) {
          requestIGNorthwindAPICustomerDto();
        } else {
          // TODO: handle error here!
        }
      });
    }
  }

  return (
    <>
      <div className={classes("row-layout grid-crud-container")}>
        <IgrGrid data={iGNorthwindAPICustomerDto} primaryKey="customerId" rowSelection="single" rowEditable="true" moving="true" allowFiltering="true" filterMode="quickFilter" rowDeleted={customersRowDeleted} rowEditDone={customersRowEditDone} className={classes("ig-typography ig-scrollbar grid-plus")}>
          <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrGridToolbarPinning></IgrGridToolbarPinning>
              <IgrGridToolbarHiding></IgrGridToolbarHiding>
              <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
            </IgrGridToolbarActions>
            <IgrGridToolbarTitle>
              <span key={uuid()}>Grid with CRUD</span>
            </IgrGridToolbarTitle>
          </IgrGridToolbar>
          <IgrColumn field="customerId" dataType="string" header="customerId" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="companyName" dataType="string" header="companyName" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="contactName" dataType="string" header="contactName" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="contactTitle" dataType="string" header="contactTitle" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.street" dataType="string" header="address street" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.city" dataType="string" header="address city" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.region" dataType="string" header="address region" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.postalCode" dataType="string" header="address postalCode" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.country" dataType="string" header="address country" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrColumn field="address.phone" dataType="string" header="address phone" editable="true" groupable="true" sortable="true" resizable="true" selectable="false"></IgrColumn>
          <IgrActionStrip>
            <IgrGridPinningActions></IgrGridPinningActions>
            <IgrGridEditingActions addRow="true"></IgrGridEditingActions>
          </IgrActionStrip>
        </IgrGrid>
      </div>
    </>
  );
}
