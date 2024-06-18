import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, TreeDragDropService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { DirectivesModule } from './@core/directives/directives.module';
import { PermissionStore } from './@core/permissions/permission.store';
import { AlertService } from './@core/service/alert.service';
import { DataStoreService } from './@core/service/data-store.service';
import { MicrostrategyService } from './@core/service/microstrategy.service';
import { RbacService } from './@core/service/rbac.service';
import { AlertModule } from './@shared/alert/alert.module';
import { TreeModule } from 'primeng/tree';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export class PicsRbacRolesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacRolesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacRolesModule, declarations: [RolesComponent], imports: [CommonModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            TreeModule,
            DragDropModule], exports: [RolesComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacRolesModule, providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore,
            DataStoreService, TreeDragDropService], imports: [CommonModule,
            ReactiveFormsModule,
            NgbModule,
            TabMenuModule,
            TabViewModule,
            TreeSelectModule,
            // HttpClientModule,
            CheckboxModule,
            DropdownModule,
            CardModule,
            ConfirmDialogModule,
            AccordionModule,
            MessageModule,
            TableModule,
            InputTextModule,
            CalendarModule,
            EditorModule,
            FieldsetModule,
            ButtonModule,
            RadioButtonModule,
            InputTextareaModule,
            InputMaskModule,
            StepsModule,
            ToastModule,
            RippleModule,
            AvatarModule,
            BadgeModule,
            MultiSelectModule,
            InputSwitchModule,
            ProgressSpinnerModule,
            SpeedDialModule,
            OrderListModule,
            FileUploadModule,
            DialogModule,
            PasswordModule,
            KnobModule,
            SidebarModule,
            ContextMenuModule,
            ConfirmPopupModule,
            DirectivesModule,
            AlertModule,
            TreeModule,
            DragDropModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PicsRbacRolesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RolesComponent
                    ],
                    imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        NgbModule,
                        TabMenuModule,
                        TabViewModule,
                        TreeSelectModule,
                        // HttpClientModule,
                        CheckboxModule,
                        DropdownModule,
                        CardModule,
                        ConfirmDialogModule,
                        AccordionModule,
                        MessageModule,
                        TableModule,
                        InputTextModule,
                        CalendarModule,
                        EditorModule,
                        FieldsetModule,
                        ButtonModule,
                        RadioButtonModule,
                        InputTextareaModule,
                        InputMaskModule,
                        StepsModule,
                        ToastModule,
                        RippleModule,
                        AvatarModule,
                        BadgeModule,
                        MultiSelectModule,
                        InputSwitchModule,
                        ProgressSpinnerModule,
                        SpeedDialModule,
                        OrderListModule,
                        FileUploadModule,
                        DialogModule,
                        PasswordModule,
                        KnobModule,
                        SidebarModule,
                        ContextMenuModule,
                        ConfirmPopupModule,
                        DirectivesModule,
                        AlertModule,
                        TreeModule,
                        DragDropModule
                    ],
                    exports: [RolesComponent],
                    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
                    providers: [RbacService, MicrostrategyService, HttpClient, AlertService, ConfirmationService, PermissionStore,
                        DataStoreService, TreeDragDropService]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljcy1yYmFjLXJvbGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXJvbGVzL3NyYy9saWIvcGljcy1yYmFjLXJvbGVzL3BpY3MtcmJhYy1yb2xlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0Is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O29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsU0FBUzt3QkFDVCxhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxVQUFVO3dCQUNWLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixlQUFlO3dCQUNmLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxpQkFBaUI7d0JBQ2pCLGlCQUFpQjt3QkFDakIscUJBQXFCO3dCQUNyQixlQUFlO3dCQUNmLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsVUFBVTt3QkFDVixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDekIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLENBQUM7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGVBQWU7d0JBQzFHLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDO2lCQUMxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENVU1RPTV9FTEVNRU5UU19TQ0hFTUEsIE5PX0VSUk9SU19TQ0hFTUEsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9yb2xlcy9yb2xlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYWNjb3JkaW9uJztcclxuaW1wb3J0IHsgQ29uZmlybWF0aW9uU2VydmljZSwgVHJlZURyYWdEcm9wU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcclxuaW1wb3J0IHsgQXZhdGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9hdmF0YXInO1xyXG5pbXBvcnQgeyBCYWRnZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYmFkZ2UnO1xyXG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2J1dHRvbic7XHJcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYWxlbmRhcic7XHJcbmltcG9ydCB7IENhcmRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2NhcmQnO1xyXG5pbXBvcnQgeyBDaGVja2JveE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBDb25maXJtRGlhbG9nTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb25maXJtZGlhbG9nJztcclxuaW1wb3J0IHsgQ29uZmlybVBvcHVwTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jb25maXJtcG9wdXAnO1xyXG5pbXBvcnQgeyBDb250ZXh0TWVudU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvY29udGV4dG1lbnUnO1xyXG5pbXBvcnQgeyBEaWFsb2dNb2R1bGUgfSBmcm9tICdwcmltZW5nL2RpYWxvZyc7XHJcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9kcm9wZG93bic7XHJcbmltcG9ydCB7IEVkaXRvck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZWRpdG9yJztcclxuaW1wb3J0IHsgRmllbGRzZXRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2ZpZWxkc2V0JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZmlsZXVwbG9hZCc7XHJcbmltcG9ydCB7IElucHV0TWFza01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvaW5wdXRtYXNrJztcclxuaW1wb3J0IHsgSW5wdXRTd2l0Y2hNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0c3dpdGNoJztcclxuaW1wb3J0IHsgSW5wdXRUZXh0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHQnO1xyXG5pbXBvcnQgeyBJbnB1dFRleHRhcmVhTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9pbnB1dHRleHRhcmVhJztcclxuaW1wb3J0IHsgS25vYk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcva25vYic7XHJcbmltcG9ydCB7IE1lc3NhZ2VNb2R1bGUgfSBmcm9tICdwcmltZW5nL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvbXVsdGlzZWxlY3QnO1xyXG5pbXBvcnQgeyBPcmRlckxpc3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL29yZGVybGlzdCc7XHJcbmltcG9ydCB7IFBhc3N3b3JkTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9wYXNzd29yZCc7XHJcbmltcG9ydCB7IFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJvZ3Jlc3NzcGlubmVyJztcclxuaW1wb3J0IHsgUmFkaW9CdXR0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3JhZGlvYnV0dG9uJztcclxuaW1wb3J0IHsgUmlwcGxlTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9yaXBwbGUnO1xyXG5pbXBvcnQgeyBTaWRlYmFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zaWRlYmFyJztcclxuaW1wb3J0IHsgU3BlZWREaWFsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zcGVlZGRpYWwnO1xyXG5pbXBvcnQgeyBTdGVwc01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvc3RlcHMnO1xyXG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFibGUnO1xyXG5pbXBvcnQgeyBUYWJNZW51TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90YWJtZW51JztcclxuaW1wb3J0IHsgVGFiVmlld01vZHVsZSB9IGZyb20gJ3ByaW1lbmcvdGFidmlldyc7XHJcbmltcG9ydCB7IFRvYXN0TW9kdWxlIH0gZnJvbSAncHJpbWVuZy90b2FzdCc7XHJcbmltcG9ydCB7IFRyZWVTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RyZWVzZWxlY3QnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmVzTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9kaXJlY3RpdmVzL2RpcmVjdGl2ZXMubW9kdWxlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9AY29yZS9wZXJtaXNzaW9ucy9wZXJtaXNzaW9uLnN0b3JlJztcclxuaW1wb3J0IHsgQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2FsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL2RhdGEtc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1pY3Jvc3RyYXRlZ3lTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL21pY3Jvc3RyYXRlZ3kuc2VydmljZSc7XHJcbmltcG9ydCB7IFJiYWNTZXJ2aWNlIH0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlL3JiYWMuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kdWxlIH0gZnJvbSAnLi9Ac2hhcmVkL2FsZXJ0L2FsZXJ0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IFRyZWVNb2R1bGUgfSBmcm9tICdwcmltZW5nL3RyZWUnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgUm9sZXNDb21wb25lbnRcclxuICBdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBOZ2JNb2R1bGUsXHJcbiAgICBUYWJNZW51TW9kdWxlLFxyXG4gICAgVGFiVmlld01vZHVsZSxcclxuICAgIFRyZWVTZWxlY3RNb2R1bGUsXHJcbiAgICAvLyBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICBEcm9wZG93bk1vZHVsZSxcclxuICAgIENhcmRNb2R1bGUsXHJcbiAgICBDb25maXJtRGlhbG9nTW9kdWxlLFxyXG4gICAgQWNjb3JkaW9uTW9kdWxlLFxyXG4gICAgTWVzc2FnZU1vZHVsZSxcclxuICAgIFRhYmxlTW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0TW9kdWxlLFxyXG4gICAgQ2FsZW5kYXJNb2R1bGUsXHJcbiAgICBFZGl0b3JNb2R1bGUsXHJcbiAgICBGaWVsZHNldE1vZHVsZSxcclxuICAgIEJ1dHRvbk1vZHVsZSxcclxuICAgIFJhZGlvQnV0dG9uTW9kdWxlLFxyXG4gICAgSW5wdXRUZXh0YXJlYU1vZHVsZSxcclxuICAgIElucHV0TWFza01vZHVsZSxcclxuICAgIFN0ZXBzTW9kdWxlLFxyXG4gICAgVG9hc3RNb2R1bGUsXHJcbiAgICBSaXBwbGVNb2R1bGUsXHJcbiAgICBBdmF0YXJNb2R1bGUsXHJcbiAgICBCYWRnZU1vZHVsZSxcclxuICAgIE11bHRpU2VsZWN0TW9kdWxlLFxyXG4gICAgSW5wdXRTd2l0Y2hNb2R1bGUsXHJcbiAgICBQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXHJcbiAgICBTcGVlZERpYWxNb2R1bGUsXHJcbiAgICBPcmRlckxpc3RNb2R1bGUsXHJcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxyXG4gICAgRGlhbG9nTW9kdWxlLFxyXG4gICAgUGFzc3dvcmRNb2R1bGUsXHJcbiAgICBLbm9iTW9kdWxlLFxyXG4gICAgU2lkZWJhck1vZHVsZSxcclxuICAgIENvbnRleHRNZW51TW9kdWxlLFxyXG4gICAgQ29uZmlybVBvcHVwTW9kdWxlLFxyXG4gICAgRGlyZWN0aXZlc01vZHVsZSxcclxuICAgIEFsZXJ0TW9kdWxlLFxyXG4gICAgVHJlZU1vZHVsZSxcclxuICAgIERyYWdEcm9wTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbUm9sZXNDb21wb25lbnRdLFxyXG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcclxuICBwcm92aWRlcnM6IFtSYmFjU2VydmljZSwgTWljcm9zdHJhdGVneVNlcnZpY2UsIEh0dHBDbGllbnQsIEFsZXJ0U2VydmljZSwgQ29uZmlybWF0aW9uU2VydmljZSwgUGVybWlzc2lvblN0b3JlLFxyXG4gICAgIERhdGFTdG9yZVNlcnZpY2UsIFRyZWVEcmFnRHJvcFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWNzUmJhY1JvbGVzTW9kdWxlIHsgfVxyXG4iXX0=