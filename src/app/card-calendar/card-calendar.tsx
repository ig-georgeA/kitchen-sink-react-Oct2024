import { IgrAvatar, IgrAvatarModule, IgrButton, IgrButtonModule, IgrCalendar, IgrCalendarModule, IgrCard, IgrCardActions, IgrCardContent, IgrCardHeader, IgrCardMedia, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrRating, IgrRatingModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { IgrXDatePicker, IgrXDatePickerModule } from '@infragistics/igniteui-react-inputs';
import { useState } from 'react';
import styles from './card-calendar.module.css';
import createClassTransformer from '../style-utils';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrCalendarModule.register();
IgrCardModule.register();
IgrIconButtonModule.register();
IgrRatingModule.register();
IgrRippleModule.register();
IgrXDatePickerModule.register();

export default function CardCalendar() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date('2024-08-12T00:00'));
  const [value, setValue] = useState<number | undefined>(4);

  function datePickerSelectedValueChanged(_: any, event: Date) {
    setSelectedDate(event.newValue);
  }

  return (
    <>
      <div className={classes("column-layout card-calendar-container")}>
        <div className={classes("row-layout group")}>
          <IgrCard className={classes("card-10")}>
            <IgrCardHeader key={uuid()}>
              <div slot="thumbnail" key={uuid()}>
                <IgrAvatar shape="circle" className={classes("avatar")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>people</span>
                  </span>
                </IgrAvatar>
              </div>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton variant="flat" className={classes("button")}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>adb</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-10")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Rozes</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Under the grave (2016)</span>
              </h5>
            </IgrCardHeader>
            <IgrCardMedia className={classes("media-content")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrButton variant="flat" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Play</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-1")}>
            <IgrCardMedia className={classes("media-content_1")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Title goes here...</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Subtitle goes here...</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton className={classes("button")}>
                  <span key={uuid()}>Primary</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrButton variant="outlined" className={classes("button")}>
                  <span key={uuid()}>Secondary</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
                <IgrIconButton variant="flat" className={classes("icon-button")} key={uuid()}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>share</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-2")}>
            <div className={classes("group_1")} key={uuid()}>
              <IgrCardHeader>
                <h3 slot="title" key={uuid()}>
                  <span key={uuid()}>Title goes here...</span>
                </h3>
                <h5 slot="subtitle" key={uuid()}>
                  <span key={uuid()}>Subtitle goes here...</span>
                </h5>
              </IgrCardHeader>
            </div>
            <IgrCardMedia className={classes("media-content_2")} key={uuid()}>
              <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" className={classes("image")} key={uuid()} />
            </IgrCardMedia>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-11")}>
            <IgrCardHeader key={uuid()}>
              <h3 slot="title" key={uuid()}>
                <span key={uuid()}>Rozes</span>
              </h3>
              <h5 slot="subtitle" key={uuid()}>
                <span key={uuid()}>Under the grave (2016)</span>
              </h5>
            </IgrCardHeader>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>favorite</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div style={{display: 'contents'}} slot="start" key={uuid()}>
                <IgrIconButton variant="flat" className={classes("icon-button")}>
                  <span className={classes("material-icons")} key={uuid()}>
                    <span key={uuid()}>bookmark</span>
                  </span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrIconButton>
              </div>
              <div slot="end" key={uuid()}>
                <IgrButton variant="flat" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Play</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
                <IgrButton variant="flat" className={classes("button")} key={uuid()}>
                  <span key={uuid()}>Button</span>
                  <IgrRipple key={uuid()}></IgrRipple>
                </IgrButton>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-3")}>
            <div className={classes("group_2")} key={uuid()}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrCardMedia className={classes("media-content_3")} key={uuid()}>
                      <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" key={uuid()} />
                    </IgrCardMedia>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Rozes</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Under the grave (2016)</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("column-layout column-layout-2")} key={uuid()}>
                  <p className={classes("typography__body-2 text-2")}>
                    <span>As I have always said: I write what’s real and what’s true, even if it means throwing myself under the bus....</span>
                  </p>
                </div>
              </IgrCardContent>
            </div>
            <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
            <IgrCardActions className={classes("actions-content")} key={uuid()}>
              <div slot="end" className={classes("igx-card-actions--justify content")} key={uuid()}>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>skip_previous</span>
                </span>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>play_circle</span>
                </span>
                <span className={classes("material-icons icon")} key={uuid()}>
                  <span key={uuid()}>skip_next</span>
                </span>
              </div>
            </IgrCardActions>
          </IgrCard>
          <IgrCard elevated="true" className={classes("card-5")}>
            <div className={classes("group_2")} key={uuid()}>
              <div className={classes("row-layout")}>
                <IgrCardHeader>
                  <div slot="thumbnail" key={uuid()}>
                    <IgrCardMedia className={classes("media-content_3")} key={uuid()}>
                      <img src="https://www.infragistics.com/angular-demos/assets/images/card/media/ROZES-Under-the-Grave.jpg" key={uuid()} />
                    </IgrCardMedia>
                  </div>
                  <h3 slot="title" key={uuid()}>
                    <span key={uuid()}>Rozes</span>
                  </h3>
                  <h5 slot="subtitle" key={uuid()}>
                    <span key={uuid()}>Under the grave (2016)</span>
                  </h5>
                </IgrCardHeader>
              </div>
              <IgrCardContent className={classes("body-content")}>
                <div className={classes("row-layout column-layout-3")} key={uuid()}>
                  <p className={classes("typography__body-2 text-3")}>
                    <span>Rate this album</span>
                  </p>
                  <IgrRating value={value} change={(_c, e) => setValue(e.detail)} className={classes("rating")}></IgrRating>
                </div>
              </IgrCardContent>
            </div>
            <span className={classes("divider")} key={uuid()}>Divider not yet available in React</span>
          </IgrCard>
        </div>
        <div className={classes("column-layout group_3")}>
          <div className={classes("group_4")}>
            <IgrXDatePicker label="Date" value={selectedDate} selectedValueChanged={(_c, e) => setSelectedDate(e.newValue)} selectedValueChanged={(s, event) => datePickerSelectedValueChanged(s, event)}></IgrXDatePicker>
          </div>
          <div className={classes("row-layout group_5")}>
            <IgrCalendar weekStart="tuesday" value={selectedDate} hideHeader="None" headerOrientation="horizontal" change={(_c, e) => setSelectedDate(e.detail)} className={classes("calendar")}></IgrCalendar>
            <IgrCalendar value={selectedDate} hideHeader="Horizontal" headerOrientation="horizontal" change={(_c, e) => setSelectedDate(e.detail)} className={classes("calendar")}></IgrCalendar>
            <IgrCalendar value={selectedDate} hideHeader="Vertical" headerOrientation="vertical" change={(_c, e) => setSelectedDate(e.detail)} className={classes("calendar")}></IgrCalendar>
            <IgrCalendar value={selectedDate} showWeekNumbers="true" visibleMonths="2" hideHeader="Horizontal" headerOrientation="horizontal" change={(_c, e) => setSelectedDate(e.detail)} className={classes("calendar")}></IgrCalendar>
          </div>
        </div>
      </div>
    </>
  );
}
