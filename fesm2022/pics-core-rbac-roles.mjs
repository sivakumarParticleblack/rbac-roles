import * as i0 from '@angular/core';
import { Injectable, Directive, Input, Component, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import * as i1$1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/router';
import { NavigationStart } from '@angular/router';
import 'rxjs/add/operator/map';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i7 from 'primeng/tabmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import * as i8 from 'primeng/api';
import { ConfirmationService, TreeDragDropService } from 'primeng/api';
import * as i9 from 'primeng/tooltip';
import * as i10 from 'primeng/tree';
import { TreeModule } from 'primeng/tree';
import * as i11 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i12 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i13 from 'primeng/accordion';
import { AccordionModule } from 'primeng/accordion';
import * as i14 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i15 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { MessageModule } from 'primeng/message';
import { OrderListModule } from 'primeng/orderlist';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepsModule } from 'primeng/steps';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { TreeSelectModule } from 'primeng/treeselect';
import { DragDropModule } from '@angular/cdk/drag-drop';

class RbacRolesService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class RoleConfig {
    static EndPoint = {
        role: {
            getAllUserRole: '/access-control/role',
            createRole: '/access-control/role/create',
            getLandingPage: '/platform/menu/application',
            addPolicyGroup: '/access-control/role',
            getAllOrgRole: '/access-control/role/organization/{orgid}',
            dossier: '/dossier'
        },
        microstrategy: {
            login: '/platform/microstrategy/login',
            getLibrary: '/platform/microstrategy/library'
        }
    };
}
class UserConfig {
    static EndPoint = {
        User: {
            getAllUserList: '/org/user',
            getAllUserActiveInactive: '/org/user?includeInactiveUsers=true',
            activateUser: '/org/user/activate',
            createUser: '/org/user/create',
            userRole: '/org/user/role',
            managementgroup: '/org/team/managementgroup',
            getAllUserOrgList: '/org/user/organization/'
        },
        Provider: {
            getProviderList: '/ref/provider',
            searchProviderList: '/ref/provider/search',
            addProviderUser: '/ref/provider/create/account'
        }
    };
}
class AttachmentConfig {
    static EndPoint = {
        Attachments: {
            GetAttachmentReferral: '/ref/attachment/referral',
            GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
            UploadKey: '/common/files/upload-key',
            DownloadKey: '/common/files/download-key',
            PostAttachment: '/ref/attachment/create',
            PutAttachment: '/ref/attachment'
        }
    };
}
class PolicyGroupConfig {
    static EndPoint = {
        policyGroup: {
            getPolicyGroupList: '/platform/page-designer/policyGroup',
            getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
            createPolicyGroup: '/platform/page-designer/policyGroup',
            getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
        }
    };
}
class PermissionsURL {
    static EndPoints = {
        permission: {
            permissionRoleById: '/access-control/permission/role/{id}',
        },
        page: {
            getPageInformation: '/org/user/page/menulist/{id}',
            updateMenuOrder: '/access-control/permission/updateMenuOrder'
        }
    };
}
class RBACINFO {
    apiHost = '';
    tokenKey = '';
    others;
    orgID;
    environment;
}
class Environment {
    mstrUsername;
    mstrPassword;
    mstrURL;
    mstrProjectID;
    applicationid;
    priority;
}

class Store {
    state$;
    _state$;
    constructor(initialState) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    setState(nextState) {
        this._state$.next(nextState);
    }
}

class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState({ ...this.state, ...data });
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class DataStoreService {
    currentStoreSubject = new BehaviorSubject({});
    currentStore = this.currentStoreSubject.asObservable();
    constructor() {
        // test code
    }
    setData(key, value) {
        const currentStore = this.getCurrentStore();
        currentStore[key] = value;
        this.currentStoreSubject.next(currentStore);
    }
    setObject(value) {
        this.currentStoreSubject.next(value);
    }
    getData(key) {
        const currentStore = this.getCurrentStore();
        return currentStore[key];
    }
    clearStore() {
        const currentStore = this.getCurrentStore();
        Object.keys(currentStore).forEach((key) => {
            delete currentStore[key];
        });
        this.currentStoreSubject.next(currentStore);
    }
    getCurrentStore() {
        return this.currentStoreSubject.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DataStoreService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });

class AppConstants {
    static errorMessage = 'Something went wrong!';
    static regexEmail = '^[0-9a-zA-Z.-]+[@][0-9a-zA-Z.-]+[.][0-9a-zA-Z]{2,}$';
}

class AlertService {
    router;
    subject = new Subject();
    keepAfterRouteChange = false;
    constructor(router) {
        this.router = router;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class Alert {
    type;
    message;
}
class UserGroupDto {
    id;
    name;
    description;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRolePageDto {
    id;
    name;
    route;
    icon;
    order;
    ismenu;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserRoleDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class UserDto {
    id;
    name;
    description;
    priority;
    order;
    defaultpage;
    defaultpageid;
    parentid;
    parent;
    constructor(data) {
        Object.assign(this, data);
    }
}
class AccessManagementConfig {
    static EndPoint = {
        Organization: {
            getOrganizationList: '/org/organization/all',
            getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
        }
    };
}

class MicrostrategyService {
    _storeservice;
    dossierList;
    RBACORG;
    environment;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.httpService = res['HTTPSERVICE'];
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'] ? this.RBACORG['environment'] : '';
            }
        });
    }
    getLibraryDetails() {
        return this.httpService
            .get(RoleConfig.EndPoint.microstrategy.getLibrary)
            .toPromise()
            .then((response) => {
            return response.data.map(mstr => ({
                id: mstr.target.id,
                projectId: mstr.projectId,
                name: mstr.target.name
            }));
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MicrostrategyService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class RbacService {
    _storeservice;
    httpService;
    constructor(_storeservice) {
        this._storeservice = _storeservice;
        this._storeservice.currentStore.subscribe((res) => {
            if (res) {
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    // constructor(private httpService: HttpService) {}
    getAllUserList(key) {
        return this.httpService.get(`${UserConfig.EndPoint.User.getAllUserList}/${key}`);
    }
    getAllUserOrgList(orgid) {
        return this.httpService.get(UserConfig.EndPoint.User.getAllUserOrgList + orgid);
    }
    saveUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.createUser, data);
    }
    updateUser(data, userid) {
        return this.httpService.put(`${UserConfig.EndPoint.User.getAllUserList}/${userid}`, data);
    }
    deleteUser(id) {
        return this.httpService.delete(`${UserConfig.EndPoint.User.getAllUserList}/${id}`);
    }
    activateUser(data) {
        return this.httpService.post(UserConfig.EndPoint.User.activateUser, data);
    }
    addProviderUser(data) {
        return this.httpService.post(UserConfig.EndPoint.Provider.addProviderUser, data);
    }
    addUserRole(data) {
        return this.httpService.post(UserConfig.EndPoint.User.userRole, data);
    }
    uploadKey(objparams) {
        return this.httpService.post(AttachmentConfig.EndPoint.Attachments.UploadKey, objparams);
    }
    getOrgPolicyGroupList(orgid) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getOrgPolicyGroups.replace('{organizationid}', String(orgid)));
    }
    getAllPolicyGroupList(policyGroupId) {
        const endPoint = policyGroupId
            ? `${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${policyGroupId}`
            : PolicyGroupConfig.EndPoint.policyGroup.getAllPolicyGroupList;
        return this.httpService.get(endPoint);
    }
    getPolicyGroupById(id) {
        return this.httpService.get(PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList + '/' + id);
    }
    getPolicyGroupsByManagementGroup(policyGroupId) {
        return this.httpService.get(`/org/policyGroup/managementgroup/${policyGroupId}`);
    }
    createPolicyGroup(data) {
        return this.httpService.post(PolicyGroupConfig.EndPoint.policyGroup.createPolicyGroup, data);
    }
    updatePolicyGroup(id, item) {
        return this.httpService.put(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`, item);
    }
    deletePolicyGroup(id) {
        return this.httpService.delete(`${PolicyGroupConfig.EndPoint.policyGroup.getPolicyGroupList}/${id}`);
    }
    getAllUserRole(id) {
        return this.httpService.get(RoleConfig.EndPoint.role.getAllOrgRole.replace('{orgid}', String(id)));
    }
    deleteRole(id) {
        return this.httpService.delete(`${RoleConfig.EndPoint.role.getAllUserRole}/${id}`);
    }
    getRoleById(roleid) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleid}`);
    }
    createRole(data) {
        return this.httpService.post(RoleConfig.EndPoint.role.createRole, data);
    }
    updateRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.getAllUserRole}/${roleId}`, data);
    }
    getLandingPage(id) {
        return this.httpService.get(`${RoleConfig.EndPoint.role.getLandingPage}/${id}`);
    }
    createPolicyGroupForRole(roleId, data) {
        return this.httpService.post(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    updatePolicyGroupForRole(roleId, data) {
        return this.httpService.put(`${RoleConfig.EndPoint.role.addPolicyGroup}/${roleId}/policygroups`, data);
    }
    getReportDashbaord() {
        return this.httpService.get(`${RoleConfig.EndPoint.role.dossier}`);
    }
    getPermissionRoleById(id) {
        return this.httpService.get(PermissionsURL.EndPoints.permission.permissionRoleById.replace('{id}', id));
    }
    getManagementGroupTree(_organizationid) {
        return this.httpService.get('/org/management-group/organization/tree');
    }
    getAllPages(role_id) {
        return this.httpService.get(PermissionsURL.EndPoints.page.getPageInformation.replace('{id}', role_id));
    }
    updateMenuOrder(page) {
        return this.httpService.post(PermissionsURL.EndPoints.page.updateMenuOrder, page);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, deps: [{ token: DataStoreService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: DataStoreService }]; } });

class PermissionDirective {
    renderer;
    elementRef;
    dataStore;
    fieldKey;
    permissions;
    constructor(renderer, elementRef, dataStore) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataStore = dataStore;
    }
    ngAfterViewInit() {
        const permissions = this.dataStore.state;
        if (permissions) {
            if (!permissions[this.fieldKey]) {
                const template = this.elementRef.nativeElement;
                if (template.tagName === 'A') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.href = 'javascript:void(0);';
                        r['disabled'] = true;
                        r.className = template.className;
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else if (template.tagName === 'P-MULTISELECT' ||
                    template.tagName === 'P-DROPDOWN' ||
                    template.tagName === 'P-CHECKBOX' ||
                    template.tagName === 'P-TREESELECT' ||
                    template.tagName === 'P-RADIOBUTTON' ||
                    template.tagName === 'P-CALENDAR') {
                    if (template) {
                        const r = document.createElement(this.elementRef.nativeElement.tagName.toLowerCase());
                        r.innerHTML = template.innerHTML;
                        r.className = template.className;
                        r.className += ' p-disabled';
                        this.elementRef.nativeElement.parentNode.replaceChild(r, template);
                    }
                }
                else {
                    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', 'true');
                    const childInputNodes = this.elementRef.nativeElement.querySelectorAll('input, select, textarea, button, a, ng-select, div, lable');
                    childInputNodes.forEach((elem) => {
                        this.renderer.setAttribute(elem, 'disabled', 'true');
                    });
                }
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: PermissionDirective, selector: "[fieldKey]", inputs: { fieldKey: "fieldKey" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: PermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[fieldKey]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }, { type: PermissionStore }]; }, propDecorators: { fieldKey: [{
                type: Input
            }] } });

class ShowFieldDirective {
    templateRef;
    viewContainer;
    dataStore;
    showField;
    constructor(templateRef, viewContainer, dataStore) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.dataStore = dataStore;
    }
    ngOnInit() {
        const permissions = this.dataStore.state;
        if (!permissions || !permissions[this.showField]) {
            this.viewContainer.clear();
        }
        else {
            this.viewContainer.createEmbeddedView(this.templateRef);
            const lookupIds = sessionStorage.getItem('LOOKUP_IDS');
            if (lookupIds) {
                const lookupIdArray = lookupIds.split(',');
                Object.entries(permissions)
                    .filter(item => item[0].startsWith('GALKP_'))
                    .forEach(([key, value]) => {
                    for (const _value of value) {
                        const _key = key.replace('GALKP_', '');
                        if (_key === this.showField &&
                            lookupIdArray.includes(String(_value['lookupid'])) &&
                            _value['action'] === 'H') {
                            this.viewContainer.clear();
                        }
                    }
                });
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, deps: [{ token: i0.TemplateRef }, { token: i0.ViewContainerRef }, { token: PermissionStore }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: ShowFieldDirective, selector: "[showField]", inputs: { showField: "showField" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ShowFieldDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[showField]'
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: PermissionStore }]; }, propDecorators: { showField: [{
                type: Input
            }] } });

const DISPLAY_IN_SECONDS = 8;
class AlertComponent {
    alertService;
    alerts = [];
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.alertService.getAlert().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.alerts = [];
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // remove alert after 5 seconds
            setTimeout(() => this.removeAlert(alert), DISPLAY_IN_SECONDS * 1000);
        });
    }
    removeAlert(alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case AlertType.Success:
                return 'alert alert-success';
            case AlertType.Error:
                return 'alert alert-danger';
            case AlertType.Info:
                return 'alert alert-info';
            case AlertType.Warning:
                return 'alert alert-warning';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, deps: [{ token: AlertService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AlertComponent, selector: "app-alert", ngImport: i0, template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"], dependencies: [{ kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-alert', template: "<div *ngFor=\"let alert of alerts\" class=\"alert-animate {{ cssClass(alert) }} alert-dismissable\">\r\n  {{ alert.message }}\r\n  <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\r\n</div>\r\n", styles: [".alert-animate{position:fixed;top:10px;left:auto;right:10px;z-index:999999;min-width:400px;text-transform:capitalize;margin:0 auto;animation-name:slideInDown;animation-duration:1s;animation-fill-mode:both}.alert-animate .close{padding:3px;border-radius:2px;color:#fff;opacity:1;text-align:center;line-height:17px;font-size:24px}@keyframes slideInDown{0%{transform:translateY(-100%);visibility:visible}to{transform:translateY(0)}}.alert-animate.alert-success{background:#04844b;color:#fff;border-color:#04844b}.alert-danger{background:#b92b28;border-color:#b92b28;color:#fff}.alert-info{color:#fff;background:#0f3164;border-color:#0f3164}\n"] }]
        }], ctorParameters: function () { return [{ type: AlertService }]; } });

class RolesComponent {
    formBuilder;
    alertService;
    mstrService;
    rolesService;
    _storeservice;
    permissionService;
    roleId;
    deleteactive_user = false;
    deleteactive_buttonok = false;
    roleList = [];
    filteredRoleList = [];
    isDisabled;
    selectedPermissionsGroup = [];
    userroles = [];
    isDisabledOther;
    deletedId;
    modelRoleName = '';
    roleForm;
    formSubmit;
    permissions = [];
    filterPermissions = [];
    landingPage = [];
    policyGroupList;
    permissionAllow;
    orgId;
    reportDashboardList;
    duplicatereportDashboardList;
    environment;
    RBACORG = new RBACINFO();
    orgSubs;
    modalContent;
    items = [];
    activeItem;
    firstTab;
    mainMenuList = [];
    reArrangedList = [];
    dublicateLandingPage = [];
    menuList = [];
    subMenuList = [];
    parent = [];
    childMenuList = [];
    showChildren = false;
    parentMenulist = [];
    selectedFile;
    httpService;
    validationErrors = {};
    inputValidationMethod;
    policyGroupsLength;
    enableButton;
    checkedRolesArr = [];
    buildTree = (parentId) => (item) => {
        const children = this.menuList.filter((child) => child.parentid === item.id);
        return {
            ...item,
            ...(children.length > 0 && { children: children.map(this.buildTree(item.id)) }),
        };
    };
    originalPermissions = [];
    nestedData() {
        this.mainMenuList = this.menuList.filter((item) => !item.parentid).map(this.buildTree(null));
    }
    constructor(injector, formBuilder, alertService, mstrService, rolesService, _storeservice, permissionService) {
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.mstrService = mstrService;
        this.rolesService = rolesService;
        this._storeservice = _storeservice;
        this.permissionService = permissionService;
        this.formSubmit = false;
        this.orgSubs = this._storeservice.currentStore.subscribe((res) => {
            this.inputValidationMethod = res['INPUTVALIDATIONMETHOD'];
            if (res['RBACORG'] && res['RBACORG'] !== '') {
                this.formSubmit = false;
                this.permissionAllow = false;
                this.RBACORG = res['RBACORG'];
                this.environment = this.RBACORG['environment'];
                this.orgId = parseInt(this.RBACORG['orgID']);
                this.httpService = res['HTTPSERVICE'];
            }
        });
    }
    ngOnInit() {
        this.initializeform();
        this.getReportDashboard();
        this.getRoleList();
        this.getPolicyGroupList();
        this.getLandingPage();
        this.getTabs();
        this.roleForm.valueChanges.subscribe(() => {
            this.enableButton = this.isAnyFormControlWithValue();
        });
    }
    isAnyFormControlWithValue() {
        const formValue = this.roleForm.value;
        const avoidProperties = ['parentid'];
        for (const key in formValue) {
            if (formValue.hasOwnProperty(key) && !avoidProperties.includes(key) && formValue[key]) {
                return true;
            }
        }
        return false;
    }
    ngOnDestroy() {
        this.orgSubs.unsubscribe();
    }
    initializeform() {
        this.roleForm = this.formBuilder.group({
            name: ['', Validators.required],
            defaultpageid: ['', Validators.required],
            parentid: [2],
            policyGroupId: [{ value: '', disabled: false }, Validators.required],
            dossierid: []
        });
    }
    get formValidate() {
        return this.roleForm.controls;
    }
    onInput(event, fieldtype, label, required) {
        const error = this.inputValidationMethod(event, fieldtype, label, required);
        if (error && typeof error === 'string') {
            this.validationErrors[label] = error;
        }
        else {
            delete this.validationErrors[label];
        }
    }
    getLandingPage() {
        this.rolesService.getLandingPage('1').subscribe((res) => {
            if (res) {
                this.landingPage = res['data'].filter((x) => x.route.charAt(0) === '/');
            }
            this.dublicateLandingPage = [...this.landingPage];
        }, (error) => console.log(error));
    }
    getRoleList(_key) {
        this.rolesService.getAllUserRole(this.orgId).subscribe((res) => {
            this.roleList = res['data'].filter((a) => a.name !== 'Super admin');
            this.filteredRoleList = this.roleList;
        }, (err) => console.log(err));
    }
    getPolicyGroupList(_managementGroupId) {
        this.rolesService.getOrgPolicyGroupList(this.orgId).subscribe((res) => {
            this.policyGroupList = res['data'];
        }, (err) => console.log(err));
    }
    clearSearch(event) {
        const inputElement = document.querySelector('.form-control');
        if (inputElement) {
            inputElement.value = '';
            this.filteredRoleList = this.roleList;
        }
    }
    onClickAddRole() {
        this.enableButton = false;
        this.roleForm.reset();
        this.formSubmit = false;
        this.initializeform();
        console.log("on Click Add Role");
        this.roleForm.valueChanges.subscribe(() => {
            this.enableButton = this.isAnyFormControlWithValue();
            console.log('Enable button : ', this.enableButton);
        });
        console.log("on Click Add Role - step 2");
        const policyGroupControl = this.roleForm.get('policyGroupId');
        console.log("policyGroupId control before enable:", policyGroupControl.disabled);
        // Add a timeout to force re-evaluation
        setTimeout(() => {
            policyGroupControl.enable();
            console.log("policyGroupId control after enable:", policyGroupControl.disabled);
        }, 0);
        this.permissionAllow = false;
        this.permissions = [];
        this.filterPermissions = [];
        this.roleId = 0;
        this.firstTab = true;
        this.validationErrors = {};
        this.policyGroupsLength = 0;
    }
    searchRole(event) {
        const value = event.target.value.toLowerCase();
        this.filteredRoleList = this.roleList.filter(a => a?.name?.toLowerCase().startsWith(value));
    }
    clearPermission(event) {
        const inputElement = document.querySelector('.clearbox');
        if (inputElement) {
            inputElement.value = '';
        }
        this.permissions = this.originalPermissions;
    }
    searchRolePermission(event) {
        const value = event.target.value.toLowerCase();
        this.permissions = this.originalPermissions.filter(a => a?.description?.toLowerCase().startsWith(value));
    }
    getTabs() {
        this.items = [
            {
                label: 'Permissions',
                icon: '',
                command: event => {
                    this.activateMenu(event);
                }
            },
            {
                label: 'Menu Ordering',
                icon: '',
                command: event => {
                    this.activateMenu(event);
                }
            }
        ];
        this.activeItem = this.items[0];
        this.firstTab = true;
    }
    getRoleInfo(roleid) {
        this.formSubmit = false;
        this.validationErrors = {};
        this.clearPermission();
        this.dublicateLandingPage = this.landingPage;
        this.roleId = roleid;
        if (roleid) {
            this.isDisabled = true;
            this.getTabs();
            this.rolesService.getRoleById(roleid).subscribe((res) => {
                this.permissionAllow = true;
                this.roleInformation(res);
                this.selectPolicyGroup();
            });
        }
        else {
            this.roleForm.reset();
            this.permissions = [];
            this.isDisabled = false;
            this.isDisabledOther = false;
            this.roleForm.enable();
            this.policyGroupsLength = 0;
        }
    }
    roleInformation(res) {
        this.roleForm.patchValue({
            name: res.data.name,
            defaultpageid: res.data.defaultpageid,
            parentid: res.data.parentid,
            policyGroupId: res?.data?.policyGroups
                .filter((item) => item)
                .map((item) => {
                return item['id'];
            }) || [],
            dossierid: JSON.parse(res.data.dossierid)?.id
        });
        this.permissions = [...res?.data?.permissions];
        this.filterPermissions = this.permissions;
        this.permissions = this.permissions
            .map(f => {
            return Object.assign({ isFormBuilder: false }, f);
        })
            .map(g => {
            if (g.key === 'FORM') {
                g.isFormBuilder = true;
            }
            else {
                g.isFormBuilder = false;
            }
            return g;
        });
        this.selectedPermissionsGroup = [];
        if (res.data.permissions && res.data.permissions.length) {
            res.data.permissions.forEach((ele) => {
                this.getSelectedPermisions(ele);
            });
        }
        this.originalPermissions = this.permissions;
        this.isDisabledOther = !this.hasAccess;
        const isAdmin = this.userroles.find(({ name }) => name === 'Admin');
        if (isAdmin) {
            this.roleForm.enable();
            this.isDisabledOther = false;
        }
        // else if (!this.hasAccess || res.isreadonly) {
        //   this.roleForm.controls['name'].disable();
        // }
        else {
            // this.roleForm.enable();
        }
    }
    get hasAccess() {
        return this.userroles.find(({ id, name }) => id === this.roleId || name === 'Admin');
    }
    isPrivilage(permission) {
        if (permission && permission?.permissions && permission?.permissions?.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    selectAllPage(index, event) {
        event.stopPropagation();
        this.permissions[index].checked = event.target.checked;
        this.setSelectedPermisions(event.target.checked, this.permissions[index].id, this.permissions[index].checked, this.permissions[index].checkedwrite);
        this.checkedRolesArr = this.permissions.filter((item) => item.checked === true);
        this.permissions[index].permissions.forEach((page) => {
            page.checked = event.target.checked;
            page.checkedwrite = event.target.checked;
            this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
            page.permissions.forEach((privilege) => {
                privilege.checked = event.target.checked;
                privilege.checkedwrite = event.target.checked;
                this.setSelectedPermisions(event.target.checked, privilege.id, privilege.checked, privilege.checkedwrite);
            });
        });
    }
    getSelectedPermisions(item) {
        this.setSelectedPermisions(item.checked, item.id, item.checked, item.checkedwrite);
        if (item.permissions && item.permissions.length) {
            item.permissions.forEach((page) => {
                this.setSelectedPermisions(page.checked, page.id, page.checked, page.checkedwrite);
                if (page && page.permissions?.length) {
                    page.permissions.forEach((privilege) => {
                        this.setSelectedPermisions(privilege.checked, privilege.id, privilege.checked, privilege.checkedwrite);
                    });
                }
            });
        }
    }
    selectAllPrivilage(pageIndex, permissionIndex, event) {
        event.stopPropagation();
        if (event.target.checked) {
            this.permissions[pageIndex].checked = event.target.checked;
        }
        if (event.target.value === 'read' || event.target.value === 'on') {
            this.permissions[pageIndex].permissions[permissionIndex].checked = event.target.checked;
        }
        if (event.target.value === 'write') {
            this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = event.target.checked;
        }
        this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
        if (event.target.value === 'read' || event.target.value === 'on') {
            if (event.target.checked || !event.target.checked) {
                this.permissions[pageIndex].permissions[permissionIndex].permissions.forEach((page) => {
                    page.checked = event.target.checked;
                    this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                });
            }
        }
        else if (event.target.value === 'write') {
            if (event.target.checked) {
                this.permissions[pageIndex].permissions[permissionIndex].permissions.forEach((page) => {
                    page.checkedwrite = event.target.checked;
                    this.setSelectedPermisions(event.target.checked, page.id, page.checked, page.checkedwrite);
                });
            }
        }
        this.getPageChecked(pageIndex);
    }
    selectPage(pageIndex, permissionIndex, event) {
        event.stopPropagation();
        if (event.target.value === 'write') {
            this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = event.target.checked;
        }
        if (event.target.value === 'read') {
            this.permissions[pageIndex].permissions[permissionIndex].checked = event.target.checked;
        }
        this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
        this.getPageChecked(pageIndex);
    }
    selectPrivilege(pageIndex, permissionIndex, privilegeIndex, event) {
        event.stopPropagation();
        if (event.target.value === 'write') {
            this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checkedwrite =
                event.target.checked;
        }
        if (event.target.value === 'read' || event.target.value === 'on') {
            this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checked =
                event.target.checked;
        }
        this.setSelectedPermisions(event.target.checked, this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].id, this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].permissions[privilegeIndex].checkedwrite);
        this.getPrivilageChecked(pageIndex, permissionIndex);
        this.getPageChecked(pageIndex);
    }
    getPageChecked(pageIndex) {
        if (this.permissions[pageIndex].checked !== this.getChecked(this.permissions[pageIndex].permissions) &&
            this.permissions[pageIndex].checkedwrite !== this.getCheckedWrite(this.permissions[pageIndex].permissions)) {
            this.permissions[pageIndex].checked = this.getChecked(this.permissions[pageIndex].permissions);
            this.setSelectedPermisions(this.permissions[pageIndex].checked, this.permissions[pageIndex].id, this.permissions[pageIndex].checked, this.permissions[pageIndex].checkedwrite);
        }
    }
    getPrivilageChecked(pageIndex, permissionIndex) {
        if (this.permissions[pageIndex].permissions[permissionIndex].checked !==
            this.getChecked(this.permissions[pageIndex].permissions[permissionIndex].permissions)) {
            this.permissions[pageIndex].permissions[permissionIndex].checked = this.getChecked(this.permissions[pageIndex].permissions[permissionIndex].permissions);
            this.setSelectedPermisions(this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
        }
        else if (this.permissions[pageIndex].permissions[permissionIndex].checkedwrite !==
            this.getCheckedWrite(this.permissions[pageIndex].permissions[permissionIndex].permissions)) {
            this.permissions[pageIndex].permissions[permissionIndex].checkedwrite = this.getCheckedWrite(this.permissions[pageIndex].permissions[permissionIndex].permissions);
            this.setSelectedPermisions(this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].id, this.permissions[pageIndex].permissions[permissionIndex].checked, this.permissions[pageIndex].permissions[permissionIndex].checkedwrite);
        }
        if (this.permissions[pageIndex].checked !==
            this.getChecked(this.permissions[pageIndex].permissions)) {
            this.permissions[pageIndex].checked = this.getChecked(this.permissions[pageIndex].permissions);
            this.setSelectedPermisions(this.permissions[pageIndex].checked, this.permissions[pageIndex].id, this.permissions[pageIndex].checked, this.permissions[pageIndex].checkedwrite);
        }
        else if (this.permissions[pageIndex].checkedwrite !==
            this.getCheckedWrite(this.permissions[pageIndex].permissions)) {
            this.permissions[pageIndex].checkedwrite = this.getCheckedWrite(this.permissions[pageIndex].permissions);
            this.setSelectedPermisions(this.permissions[pageIndex].checked, this.permissions[pageIndex].id, this.permissions[pageIndex].checked, this.permissions[pageIndex].checkedwrite);
        }
    }
    selectAllAccess(value) {
        if (value === false) {
            this.checkedRolesArr = [];
        }
        this.permissions.forEach((page) => {
            page.checked = value;
            this.setSelectedPermisions(value, page.id, page.checked, page.checkedwrite);
            if (page && page.permissions) {
                page.permissions.forEach((permission) => {
                    permission.checked = value;
                    this.setSelectedPermisions(value, permission.id, permission.checked, permission.checkedwrite);
                    if (permission && permission.permissions?.length) {
                        permission.permissions.forEach((privilege) => {
                            privilege.checked = value;
                            privilege.checkedwrite = value;
                            this.setSelectedPermisions(value, privilege.id, privilege.checked, privilege.checkedwrite);
                        });
                    }
                });
            }
        });
    }
    addNewRole(id) {
        this.permissions = [];
        this.formSubmit = false;
        this.permissionAllow = false;
        this.rolesService.getPermissionRoleById(id).subscribe((res) => {
            this.permissionAllow = true;
            this.permissions = res['data'];
        }, (err) => console.log(err));
    }
    setSelectedPermisions(_selected, id, allow, write) {
        const index = this.selectedPermissionsGroup.findIndex(res => res.id === id);
        if (index === -1 && allow) {
            this.selectedPermissionsGroup.push({ id, allow, write });
        }
        else if (!allow && !write && index !== -1) {
            this.selectedPermissionsGroup.splice(index, 1);
        }
        else if (index !== -1) {
            this.selectedPermissionsGroup = this.selectedPermissionsGroup.map(i => {
                if (i.id === id) {
                    i.write = write;
                    i.allow = allow;
                }
                return i;
            });
        }
    }
    resetReportDashboardList() {
        this.reportDashboardList = this.duplicatereportDashboardList;
    }
    addRole() {
        this.formSubmit = true;
        let data = this.roleForm.getRawValue();
        if (this.roleForm.valid) {
            const dossierConfig = this.reportDashboardList?.filter((dossier) => dossier.id === data.dossierid)?.map((a) => ({
                id: a.id,
                projectId: a.projectId
            }))[0];
            data.priority = this.environment.priority;
            data.applicationid = this.environment.applicationid;
            data.parentid = 2;
            data.permissions = this.selectedPermissionsGroup;
            data.dossierid = JSON.stringify(dossierConfig);
            data = Object.assign({ organizationid: this.orgId }, data);
            if (this.roleId) {
                data.id = Number(this.roleId);
                this.rolesService.updateRole(this.roleId, data).subscribe(() => {
                    this.getRoleList();
                    this.mapPolicyGroupToRole(this.roleId, data.policyGroupId);
                    this.alertService.success('Role updated successfully');
                }, (err) => this.alertService.error(err.error.message));
            }
            else {
                data.id = 0;
                data.priority = this.environment.priority;
                this.rolesService.createRole(data).subscribe((res) => {
                    this.cancel();
                    if (data.policyGroupId) {
                        this.mapPolicyGroupToRole(res['data'], data.policyGroupId, 'add');
                    }
                    this.alertService.success('Role saved successfully');
                    this.getRoleList();
                }, (err) => this.alertService.error(err.error.message));
            }
        }
    }
    mapPolicyGroupToRole(id, data, action) {
        if (action === 'add') {
            this.rolesService.createPolicyGroupForRole(id, data).subscribe(() => console.log('policy group mapped to role successfully'), (_err) => this.alertService.error(AppConstants.errorMessage));
        }
        else {
            this.rolesService.updatePolicyGroupForRole(id, data).subscribe(() => console.log('policy group mapped to role successfully'), (_err) => this.alertService.error(AppConstants.errorMessage));
        }
    }
    getReturnValue(array = [], type) {
        return type === 'id'
            ? array.map(({ id }) => id)
            : array.map(id => {
                return { id };
            });
    }
    getChecked(item) {
        return item.filter(({ checked }) => checked).length > 0;
    }
    getCheckedWrite(item) {
        return item.filter(({ checkedwrite }) => checkedwrite).length > 0;
    }
    cancel() {
        this.roleForm.reset();
        this.roleForm.enable();
        this.permissions = [];
        this.formSubmit = false;
        this.permissionAllow = false;
        this.roleId = 0;
        this.validationErrors = {};
        this.filteredRoleList = this.roleList;
        this.policyGroupsLength = 0;
    }
    delete(event, id, item) {
        if (item?.active_user !== null) {
            this.deleteactive_user = false;
            this.deleteactive_buttonok = false;
            // Perform action when active_user is not null
            console.log('Deleting Role with active user');
            this.modalContent = 'This Role is currently associated with active users. De-link users from this Role, to proceed with deleting.';
        }
        else {
            // Perform action when active_user is null
            console.log('Deleting Role');
            this.modalContent = 'Are you sure you want to delete the Role?';
            this.deleteactive_user = true;
            this.deleteactive_buttonok = true;
        }
        event.stopPropagation();
        this.deletedId = id;
        $('#Deleteuser').modal('show');
    }
    deleteRole() {
        this.rolesService.deleteRole(this.deletedId).subscribe(() => {
            this.cancel();
            this.alertService.success('Role deleted successfully');
            $('#Deleteuser').modal('hide');
            this.getRoleList();
        }, (_err) => this.alertService.error('Failed to delete Role'));
    }
    async getReportDashboard() {
        this.reportDashboardList = await this.mstrService.getLibraryDetails();
        this.duplicatereportDashboardList = await this.mstrService.getLibraryDetails();
    }
    // roleValidation(): any {
    //   if (!this.roleForm.value.dossierid) {
    //     this.alertService.warn('Please fill all required fields');
    //     return false;
    //   }
    //   return true;
    // }
    onModelRole(value) {
        this.modelRoleName = value;
    }
    searchLandingPageList(event) {
        const value = event.target.value.toLowerCase();
        this.dublicateLandingPage = this.landingPage.filter((a) => a?.name?.toLowerCase().startsWith(value));
    }
    resetLandingPageList() {
        this.dublicateLandingPage = this.landingPage;
    }
    activateMenu(event) {
        if (event.item.label == 'Permissions') {
            this.firstTab = true;
            this.clearPermission();
        }
        else {
            this.firstTab = false;
            this.getPageInformation();
        }
    }
    getPageInformation() {
        this.permissionService.getAllPages(this.roleId).subscribe((res) => {
            this.menuList = res?.data;
            res.data.map((item, index) => {
                item.label = item.name;
            });
            this.nestedData();
            console.log(this.mainMenuList);
            // document.querySelector('#result').innerHTML = this.buildNavigation(this.menuList);
            // res.data.map((item, index) => {
            //   if (item.parentid == null) {
            //     let obj = {
            //       key : 1,
            //       id: item.id,
            //       parentid: item.parentid,
            //       label: item.name,
            //       data: 'Documents Folder',
            //       icon: 'pi pi-fw pi-inbox',
            //       children: []
            //     }
            //     this.mainMenuList.push(obj)
            //   }
            // });
            // this.mainMenuList.map((menu, index1) => {
            //   this.menuList.map((list, index) => {
            //     if (list?.parentid == menu?.id) {
            //       let obj = {
            //         key : 2,
            //         id: list.id,
            //         parentid: list.parentid,
            //         label: list.name,
            //         data: 'Documents Folder',
            //         icon: 'pi pi-fw pi-inbox',
            //         children: []
            //       }
            //       this.mainMenuList[index1].children.push(obj);
            //     }
            //   })
            // })
            // this.mainMenuList.map((menu, index1) => {
            //   menu.children.map((subitem, subindex) => {
            //     this.menuList.map((list, index) => {
            //       if(list.parentid == subitem.id)
            //       {
            //         let obj = {
            //             key : 3,
            //             id: list.id,
            //             parentid: list.parentid,
            //             label: list.name,
            //             data: 'Documents Folder',
            //             icon: 'pi pi-fw pi-inbox',
            //           }
            //           subitem.children.push(obj);
            //       }
            //     })
            //   })
            // })
        });
    }
    updateMenuOrder() {
        this.mainMenuList.forEach((element, index) => {
            let data = {
                'menuorder': index + 1,
                'id': element.rolepermissionid,
                'roleid': this.roleId
            };
            this.reArrangedList.push(data);
            if (element?.children?.length > 0) {
                element?.children?.forEach((childelement, childindex) => {
                    let childdata = {
                        'menuorder': childindex + 1,
                        'id': childelement.rolepermissionid,
                        'roleid': this.roleId
                    };
                    this.reArrangedList.push(childdata);
                    if (childelement?.children?.length > 0) {
                        childelement?.children?.forEach((childrenelement, childrenindex) => {
                            let childrendata = {
                                'menuorder': childrenindex + 1,
                                'id': childrenelement.rolepermissionid,
                                'roleid': this.roleId
                            };
                            this.reArrangedList.push(childrendata);
                        });
                    }
                });
            }
        });
        console.log('this.rearrangelist', this.reArrangedList);
        this.permissionService.updateMenuOrder({ pages: this.reArrangedList }).subscribe((res) => {
            // this.alertService.success('Updated Successfully!');
            // this.Service.sendUpdate('Updated Successfully');
            // this.getPageInformation();
            // for role details update
            this.addRole();
            const userRole = sessionStorage.getItem('role_id');
            if (Number(userRole) === this.roleId) {
                window.location.reload();
            }
        });
    }
    nodeDrop(event) {
        if (event.originalEvent.target.childNodes.length === 0) {
            if (event.dragNode.parentid == event.dropNode.parentid) {
                event.accept();
            }
            else {
                this.alertService.error('Not Allowed to Drop');
            }
            console.log('this.mainMenuList', this.mainMenuList);
        }
        else {
            this.alertService.error('Not Allowed to Drop');
        }
    }
    selectPolicyGroup() {
        this.policyGroupsLength = this.roleForm.value.policyGroupId.length;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RolesComponent, deps: [{ token: i0.Injector }, { token: i1$1.FormBuilder }, { token: AlertService }, { token: MicrostrategyService }, { token: RbacService }, { token: DataStoreService }, { token: RbacService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RolesComponent, selector: "roles", ngImport: i0, template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"roleForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-2 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch d-flex align-items-center\"> <!-- Modified line -->\r\n            <span class=\"p-input-icon-right w-100\">\r\n              <i class=\"pi pi-times-circle\" (click)=\"clearSearch($event)\"></i>\r\n              <input class=\"form-control\" fieldKey=\"SETTINGS_ROL_SEARCH_BY_NAME\" placeholder=\"Search by Role name\"\r\n                type=\"text\" (keyup)=\"searchRole($event)\" />\r\n            </span>\r\n            <button type=\"button\" class=\"btn btn-primary btncommon ml-2\" fieldKey=\"SETTINGS_ROL_ADD_NEW\"\r\n              (click)=\"onClickAddRole()\">Add</button>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredRoleList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredRoleList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getRoleInfo(item.id)\"\r\n                [ngClass]=\"{ active: +item.id === roleId }\">\r\n                <div class=\"col-md-10 col-sm-10 col-10 overflow_txt\">\r\n                  <span class=\"nameuser\">{{ item.name }}</span> <br />\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <span class=\"right-icons\">\r\n                    <em class=\"fa fa-trash text-primary\" *showField=\"'SETTINGS_ROL_DELETE'\"\r\n                      (click)=\"delete($event, item.id, item)\" aria-hidden=\"true\"></em>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 roles-right group-role mt-2\">\r\n      <p-card class=\"rbac-card\" [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Role Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label for=\"rolesName\" class=\"referral-form-labels\">Role Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"rolesName\" type=\"text\" fieldKey=\"SETTINGS_ROL_ROLE_NAME\" formControlName=\"name\"\r\n              placeholder=\"Enter Role Name\" aria-describedby=\"rolesName\" [(ngModel)]=\"modelRoleName\"\r\n              (ngModelChange)=\"onModelRole($event)\" (input)=\"onInput($event, 'name', 'Role Name', true)\" pInputText />\r\n            <div *ngIf=\"validationErrors['Role Name']\" class=\"p-error block mt-1\">{{validationErrors['Role Name']}}\r\n            </div>\r\n            <div *ngIf=\"!validationErrors['Role Name'] && formValidate['name'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['name'].invalid\" class=\"p-error block mt-1\">Role Name is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"landingPage\" for=\"landingPage\" class=\"referral-form-labels\">Landing Page Menu\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown name=\"landingPage\" [options]=\"dublicateLandingPage\" placeholder=\"Select Landing Page Menu\"\r\n              formControlName=\"defaultpageid\" defaultLabel=\"Select Landing Page Menu\" (onHide)=\"resetLandingPageList()\"\r\n              [resetFilterOnHide]=\"true\" [filter]=\"true\" filterBy=\"name\" (keyup)=\"searchLandingPageList($event)\"\r\n              [showClear]=\"true\" fieldKey=\"SETTINGS_ROL_LANDING_PAGE\" optionLabel=\"name\" optionValue=\"id\"\r\n              inputId=\"landingPage\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['defaultpageid'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['defaultpageid'].invalid\" class=\"p-error block mt-1\">Landing Page Menu is\r\n                required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"dossierId\" for=\"dossierId\" class=\"referral-form-labels\">Report Dashboard</label>\r\n            <p-dropdown [options]=\"reportDashboardList\" optionLabel=\"name\" id=\"dossierid\" [resetFilterOnHide]=\"true\"\r\n              [filter]=\"true\" [showClear]=\"true\" optionValue=\"id\" placeholder=\"Select ID\" formControlName=\"dossierid\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n          </div>\r\n          <!-- <div class=\"p-field col-lg-4 col-md-12 col-12\"></div>\r\n            <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n              <button\r\n                class=\"pull-right mb-2 btn btn-primary btncommon report_button\"\r\n                fieldKey=\"SETTINGS_ROL_CONFIGURE_PERMISSION\"\r\n                (click)=\"addNewRole('1')\">\r\n                Configure Permission\r\n              </button>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-md-12 col-12\">\r\n            <p-accordion class=\"w-full policygroup-accordion\" iconPos=\"endVal\">\r\n              <p-accordionTab>\r\n                <ng-template pTemplate=\"header\">\r\n                  <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                    <span class=\"font-bold\">\r\n                      <label aria-labelledby=\"policyGroupList\" for=\"policyGroupList\"\r\n                        class=\"mb-0 referral-form-labels\">Policy\r\n                        Groups\r\n                        <span class=\"requiredfield text-danger\">*</span>\r\n                        <span *ngIf=\"policyGroupsLength > 0\" class=\"pg-count ml-2\">{{policyGroupsLength}}</span>\r\n                      </label>\r\n                    </span>\r\n                  </span>\r\n                </ng-template>\r\n\r\n                <p-multiSelect name=\"policyGroupList\" [options]=\"policyGroupList\" formControlName=\"policyGroupId\"\r\n                  defaultLabel=\"Select Policy Groups\" optionLabel=\"policygroupname\" optionValue=\"id\"\r\n                  (onHide)=\"resetReportDashboardList()\" [resetFilterOnHide]=\"true\" inputId=\"policyGroupList\"\r\n                  ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_ROL_POLICY_GROUP\" display=\"chip\"\r\n                  styleClass=\"policygroup-v2 w-100\" (onChange)=\"selectPolicyGroup()\">\r\n                </p-multiSelect>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n            <div *ngIf=\"formValidate['policyGroupId'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['policyGroupId'].invalid\" class=\"p-error block mt-1\">Policy Group is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"mt-2\" *ngIf=\"permissionAllow\">\r\n          <button class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_SELECT_ALL\"\r\n            (click)=\"selectAllAccess(true)\">\r\n            Select All\r\n          </button>\r\n          <button fieldKey=\"SETTINGS_ROL_RESET\" class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n            (click)=\"selectAllAccess(false)\" [disabled]=\"checkedRolesArr.length === 0\">\r\n            Reset\r\n          </button>\r\n          <!-- <br /> -->\r\n        </div>\r\n        <div class=\"strip_head toggleleft adjusttop\" *ngIf=\"permissionAllow\">\r\n          <!-- <span class=\"report_head font-weight-bold\">Permissions</span> -->\r\n          <p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"></p-tabMenu>\r\n        </div>\r\n\r\n        <div *ngIf=\"firstTab\">\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"mt-2 mb-3\">\r\n            <div *ngIf=\"permissionAllow\">\r\n              <div class=\"permission-filter\">\r\n                <input class=\"form-control clearbox\" placeholder=\"Search by Permissions name\" type=\"text\"\r\n                  (keyup)=\"searchRolePermission($event)\" />\r\n                <i class=\"pi pi-times-circle\" (click)=\"clearPermission($event)\"></i>\r\n              </div>\r\n              <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n                *ngIf=\"!filterPermissions.length\">\r\n                <p>No Record Found</p>\r\n              </div>\r\n            </div>\r\n            <p-accordion class=\"w-100\">\r\n              <p-accordionTab class=\"w-100\" *ngFor=\"let page of permissions; let i = index\">\r\n                <ng-template pTemplate=\"header\">\r\n                  {{ page.description }}\r\n                </ng-template>\r\n                <ng-template pTemplate=\"content\">\r\n                  <div class=\"heading_analysis datamargin\">\r\n                    <div class=\"g-checkbox pl-1\">\r\n                      <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\"\r\n                        (change)=\"selectAllPage(i, $event)\" [checked]=\"page?.checked\" />\r\n                      <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ul class=\"marginul_list ecms_rolescroll\">\r\n                    <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                      <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                        <li>\r\n                          <div class=\"inner_childaccess d-flex mt-0 py-1\">\r\n                            <div class=\"d-inline-flex align-items-center\">\r\n                              <label class=\"g-checkbox pl-1 mb-0\">\r\n                                <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                                  (change)=\"selectAllPrivilage(i, j, $event)\" id=\"description{{ j }}\" />\r\n                                <span class=\"checkmark\"></span>\r\n                              </label>\r\n                              <label for=\"description{{ j }}\" class=\"heading_role mb-0\">{{\r\n                                permission.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li class=\"ml-1\" *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                          <div class=\"d-flex\">\r\n                            <div class=\"custom-control custom-switch\">\r\n                              <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                                id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\"\r\n                                (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                              <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                                privilege.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ng-container>\r\n                      <ng-template #permissionOnly>\r\n                        <li>\r\n                          <div class=\"custom-control custom-switch\">\r\n                            <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                              (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                            <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                              permission.description }}\r\n                            </label>\r\n                          </div>\r\n                        </li>\r\n                      </ng-template>\r\n                    </ng-container>\r\n                  </ul>\r\n                </ng-template>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n            <div class=\"col-md-12 box d-none\" *ngFor=\"let page of permissions; let i = index\">\r\n              <div class=\"heading_analysis datamargin\">\r\n                <div class=\"Customcheckbox\">\r\n                  <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\" (change)=\"selectAllPage(i, $event)\"\r\n                    [checked]=\"page?.checked\" />\r\n                  <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                </div>\r\n              </div>\r\n\r\n              <ul class=\"marginul_list ecms_rolescroll\">\r\n                <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                  <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                    <li>\r\n                      <div class=\"inner_childaccess\">\r\n                        <label class=\"Customcheckbox\">\r\n                          <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                            (change)=\"selectAllPrivilage(i, j, $event)\" />\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                        <span class=\"heading_role\">{{ permission.description }}</span>\r\n                      </div>\r\n                    </li>\r\n                    <li *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                          id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\" (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                          privilege.description\r\n                          }}</label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-container>\r\n                  <ng-template #permissionOnly>\r\n                    <li>\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                          (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                          permission.description }}\r\n                        </label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-template>\r\n                </ng-container>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button class=\"pull-right btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\" (click)=\"addRole()\">\r\n              {{ roleId ? 'Update' : 'Add' }} Role\r\n            </button>\r\n            <button class=\"pull-right mr-2 btn bg-white text-primary btncancel\" fieldKey=\"SETTINGS_ROL_CANCEL\"\r\n              (click)=\"cancel()\" [disabled]=\"!enableButton\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!firstTab\">\r\n\r\n          <div class=\"card flex justify-content-center mt-4\">\r\n            <p-tree [value]=\"mainMenuList\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" draggableScope=\"self\"\r\n              droppableScope=\"self\" class=\"w-full md:w-30rem\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n              [validateDrop]=\"true\" (onNodeDrop)=\"nodeDrop($event)\"></p-tree>\r\n          </div>\r\n\r\n          <div class=\"mt-2\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\"\r\n              (click)=\"updateMenuOrder()\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>{{ modalContent }}</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteRole()\"\r\n            *ngIf=\"deleteactive_user\">\r\n            Delete\r\n          </button>\r\n\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            *ngIf=\"deleteactive_buttonok\">\r\n            Cancel\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            *ngIf=\"!deleteactive_buttonok\">\r\n            OK\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--font-13)}.useracess{border-radius:2px;padding:5px 0;max-height:calc(100vh - 227px);overflow-y:auto}.userempty{max-width:none;border-radius:50%;height:35px;width:35px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.nameuser{font-size:var(--font-16);color:var(--label-text);font-weight:400}.userid,span.emailuser{font-size:var(--font-15);color:#838383}.heading_analysis{padding-bottom:0;border-bottom:1px solid var(--table-border)}.Customcheckbox{position:relative;padding-top:0;padding-left:10px}.heading_role{padding-left:10px;font-size:var(--font-14);position:relative}.marginul_list{padding:0;margin:0}.marginul_list li{list-style:none;padding-top:5px}.marginul_list li label{color:var(--text-dark);text-transform:capitalize}.marginul_list.ecms_rolescroll{max-height:250px;overflow:auto;margin-bottom:20px}.ecms_rolescroll::-webkit-scrollbar{width:.5em;height:.5em}.ecms_rolescroll::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.ecms_rolescroll::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid slategrey}.inner_childaccess{margin-top:9px;margin-left:3px;border-bottom:1px solid var(--table-border)}.Customcheckbox input{display:inline-block}.Customcheckbox:hover input~.checkmark{border:solid 2px #2196f3}.Customcheckbox input~.checkmark{display:none}.Customcheckbox input:checked~.checkmark{display:none;border:solid 2px #1db766;background-color:#1db766}.Customcheckbox input:checked~.checkmark:after{display:block}.Customcheckbox .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #ffffff;border-width:0 2px 2px 0;transform:rotate(45deg)}.custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.custom-control.custom-switch.toggleleft .custom-control-label{padding-top:3px;font-size:var(--font-13)}.custom-switch .custom-control-label:after{top:calc(.25rem + 3px)}.toggle .custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.toggle .custom-control-input~.custom-control-label:before{color:#fff;border:#8c8c8c;background:#8c8c8c}.toggle .custom-control-label:after{background-color:#fff}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:18px;pointer-events:none;content:\"\";background-color:#fff;border:1px solid #adb5bd}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control input[type=checkbox]+label:before{content:\"\"}.custom-switch{padding-left:3.25rem}.toggleleft{font-size:var(--font-13);font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-top:27px}.head-div .heading{font-weight:600}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-trash{font-size:18px}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-content{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}.adjusttop{margin-top:60px;margin-bottom:-24px}:host ::ng-deep .p-tree .p-treenode-droppoint.p-treenode-droppoint-active{border:1px solid #89c8f7;height:30px;background:none!important}.permission-filter{margin:20px 0 10px;position:relative}.permission-filter i{position:absolute;right:8px;top:50%;cursor:pointer;margin-top:-.5rem;color:#6c757d}:host ::ng-deep .policygroup-v2 .p-multiselect-token-label{width:100%}:host ::ng-deep .policygroup-accordion .policygroup-v2.p-multiselect .p-multiselect-panel{top:auto!important}\n"], dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i7.TabMenu, selector: "p-tabMenu", inputs: ["model", "activeItem", "scrollable", "popup", "style", "styleClass", "ariaLabel", "ariaLabelledBy"], outputs: ["activeItemChange"] }, { kind: "directive", type: i8.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i9.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "component", type: i10.Tree, selector: "p-tree", inputs: ["value", "selectionMode", "selection", "style", "styleClass", "contextMenu", "layout", "draggableScope", "droppableScope", "draggableNodes", "droppableNodes", "metaKeySelection", "propagateSelectionUp", "propagateSelectionDown", "loading", "loadingIcon", "emptyMessage", "ariaLabel", "togglerAriaLabel", "ariaLabelledBy", "validateDrop", "filter", "filterBy", "filterMode", "filterPlaceholder", "filteredNodes", "filterLocale", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "indentation", "_templateMap", "trackBy", "virtualNodeHeight"], outputs: ["selectionChange", "onNodeSelect", "onNodeUnselect", "onNodeExpand", "onNodeCollapse", "onNodeContextMenuSelect", "onNodeDrop", "onLazyLoad", "onScroll", "onScrollIndexChange", "onFilter"] }, { kind: "component", type: i11.Dropdown, selector: "p-dropdown", inputs: ["id", "scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: i12.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "component", type: i13.Accordion, selector: "p-accordion", inputs: ["multiple", "style", "styleClass", "expandIcon", "collapseIcon", "activeIndex", "selectOnFocus", "headerAriaLevel"], outputs: ["onClose", "onOpen", "activeIndexChange"] }, { kind: "component", type: i13.AccordionTab, selector: "p-accordionTab", inputs: ["id", "header", "headerStyle", "tabStyle", "contentStyle", "tabStyleClass", "headerStyleClass", "contentStyleClass", "disabled", "cache", "transitionOptions", "iconPos", "selected", "headerAriaLevel"], outputs: ["selectedChange"] }, { kind: "directive", type: i14.InputText, selector: "[pInputText]" }, { kind: "component", type: i15.MultiSelect, selector: "p-multiSelect", inputs: ["id", "ariaLabel", "style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize", "selectAll", "focusOnHover", "filterFields", "selectOnFocus", "autoOptionFocus"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove", "onSelectAllChange"] }, { kind: "directive", type: PermissionDirective, selector: "[fieldKey]", inputs: ["fieldKey"] }, { kind: "directive", type: ShowFieldDirective, selector: "[showField]", inputs: ["showField"] }, { kind: "component", type: AlertComponent, selector: "app-alert" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RolesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'roles', template: "<app-alert></app-alert>\r\n<div class=\"permission\">\r\n  <div class=\"row\" [formGroup]=\"roleForm\">\r\n    <div class=\"col-lg-4 col-md-6 col-12\">\r\n      <div class=\"clearfix\"></div>\r\n      <div class=\"tab-content py-2 px-2 px-sm-0\">\r\n        <div class=\"tab-pane fade show active\">\r\n          <div class=\"form-group bgiconsearch d-flex align-items-center\"> <!-- Modified line -->\r\n            <span class=\"p-input-icon-right w-100\">\r\n              <i class=\"pi pi-times-circle\" (click)=\"clearSearch($event)\"></i>\r\n              <input class=\"form-control\" fieldKey=\"SETTINGS_ROL_SEARCH_BY_NAME\" placeholder=\"Search by Role name\"\r\n                type=\"text\" (keyup)=\"searchRole($event)\" />\r\n            </span>\r\n            <button type=\"button\" class=\"btn btn-primary btncommon ml-2\" fieldKey=\"SETTINGS_ROL_ADD_NEW\"\r\n              (click)=\"onClickAddRole()\">Add</button>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"useracess\">\r\n            <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n              *ngIf=\"!filteredRoleList.length\">\r\n              <p>No Record Found</p>\r\n            </div>\r\n            <ng-container *ngFor=\"let item of filteredRoleList\">\r\n              <div class=\"row userdata align-items-center\" (click)=\"getRoleInfo(item.id)\"\r\n                [ngClass]=\"{ active: +item.id === roleId }\">\r\n                <div class=\"col-md-10 col-sm-10 col-10 overflow_txt\">\r\n                  <span class=\"nameuser\">{{ item.name }}</span> <br />\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <span class=\"right-icons\">\r\n                    <em class=\"fa fa-trash text-primary\" *showField=\"'SETTINGS_ROL_DELETE'\"\r\n                      (click)=\"delete($event, item.id, item)\" aria-hidden=\"true\"></em>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-8 col-md-6 col-12 roles-right group-role mt-2\">\r\n      <p-card class=\"rbac-card\" [style]=\"{ width: '100%', 'margin-bottom': '2em' }\">\r\n        <div class=\"strip_head toggleleft\">\r\n          <span class=\"report_head font-weight-bold\">Role Details</span>\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label for=\"rolesName\" class=\"referral-form-labels\">Role Name\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <input id=\"rolesName\" type=\"text\" fieldKey=\"SETTINGS_ROL_ROLE_NAME\" formControlName=\"name\"\r\n              placeholder=\"Enter Role Name\" aria-describedby=\"rolesName\" [(ngModel)]=\"modelRoleName\"\r\n              (ngModelChange)=\"onModelRole($event)\" (input)=\"onInput($event, 'name', 'Role Name', true)\" pInputText />\r\n            <div *ngIf=\"validationErrors['Role Name']\" class=\"p-error block mt-1\">{{validationErrors['Role Name']}}\r\n            </div>\r\n            <div *ngIf=\"!validationErrors['Role Name'] && formValidate['name'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['name'].invalid\" class=\"p-error block mt-1\">Role Name is required </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"landingPage\" for=\"landingPage\" class=\"referral-form-labels\">Landing Page Menu\r\n              <span class=\"requiredfield text-danger\">*</span>\r\n            </label>\r\n            <p-dropdown name=\"landingPage\" [options]=\"dublicateLandingPage\" placeholder=\"Select Landing Page Menu\"\r\n              formControlName=\"defaultpageid\" defaultLabel=\"Select Landing Page Menu\" (onHide)=\"resetLandingPageList()\"\r\n              [resetFilterOnHide]=\"true\" [filter]=\"true\" filterBy=\"name\" (keyup)=\"searchLandingPageList($event)\"\r\n              [showClear]=\"true\" fieldKey=\"SETTINGS_ROL_LANDING_PAGE\" optionLabel=\"name\" optionValue=\"id\"\r\n              inputId=\"landingPage\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n            <div *ngIf=\"formValidate['defaultpageid'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['defaultpageid'].invalid\" class=\"p-error block mt-1\">Landing Page Menu is\r\n                required\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n            <label aria-labelledby=\"dossierId\" for=\"dossierId\" class=\"referral-form-labels\">Report Dashboard</label>\r\n            <p-dropdown [options]=\"reportDashboardList\" optionLabel=\"name\" id=\"dossierid\" [resetFilterOnHide]=\"true\"\r\n              [filter]=\"true\" [showClear]=\"true\" optionValue=\"id\" placeholder=\"Select ID\" formControlName=\"dossierid\">\r\n              <ng-template let-item pTemplate=\"selectedItem\">\r\n                <div pTooltip=\"{{item?.name}}\" tooltipPosition=\"top\" class=\"text-truncate\"> {{ item?.name }}</div>\r\n              </ng-template>\r\n              <ng-template let-object pTemplate=\"item\">\r\n                {{ object.name }}\r\n              </ng-template>\r\n            </p-dropdown>\r\n          </div>\r\n          <!-- <div class=\"p-field col-lg-4 col-md-12 col-12\"></div>\r\n            <div class=\"p-field col-lg-4 col-md-12 col-12\">\r\n              <button\r\n                class=\"pull-right mb-2 btn btn-primary btncommon report_button\"\r\n                fieldKey=\"SETTINGS_ROL_CONFIGURE_PERMISSION\"\r\n                (click)=\"addNewRole('1')\">\r\n                Configure Permission\r\n              </button>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"p-fluid p-formgrid row\">\r\n          <div class=\"p-field col-md-12 col-12\">\r\n            <p-accordion class=\"w-full policygroup-accordion\" iconPos=\"endVal\">\r\n              <p-accordionTab>\r\n                <ng-template pTemplate=\"header\">\r\n                  <span class=\"flex align-items-center head-text gap-2 w-full\">\r\n                    <span class=\"font-bold\">\r\n                      <label aria-labelledby=\"policyGroupList\" for=\"policyGroupList\"\r\n                        class=\"mb-0 referral-form-labels\">Policy\r\n                        Groups\r\n                        <span class=\"requiredfield text-danger\">*</span>\r\n                        <span *ngIf=\"policyGroupsLength > 0\" class=\"pg-count ml-2\">{{policyGroupsLength}}</span>\r\n                      </label>\r\n                    </span>\r\n                  </span>\r\n                </ng-template>\r\n\r\n                <p-multiSelect name=\"policyGroupList\" [options]=\"policyGroupList\" formControlName=\"policyGroupId\"\r\n                  defaultLabel=\"Select Policy Groups\" optionLabel=\"policygroupname\" optionValue=\"id\"\r\n                  (onHide)=\"resetReportDashboardList()\" [resetFilterOnHide]=\"true\" inputId=\"policyGroupList\"\r\n                  ariaFilterLabel=\"null\" fieldKey=\"SETTINGS_ROL_POLICY_GROUP\" display=\"chip\"\r\n                  styleClass=\"policygroup-v2 w-100\" (onChange)=\"selectPolicyGroup()\">\r\n                </p-multiSelect>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n            <div *ngIf=\"formValidate['policyGroupId'].errors && formSubmit\">\r\n              <div *ngIf=\"formValidate['policyGroupId'].invalid\" class=\"p-error block mt-1\">Policy Group is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"mt-2\" *ngIf=\"permissionAllow\">\r\n          <button class=\"pull-right mb-2 mr-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_SELECT_ALL\"\r\n            (click)=\"selectAllAccess(true)\">\r\n            Select All\r\n          </button>\r\n          <button fieldKey=\"SETTINGS_ROL_RESET\" class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\"\r\n            (click)=\"selectAllAccess(false)\" [disabled]=\"checkedRolesArr.length === 0\">\r\n            Reset\r\n          </button>\r\n          <!-- <br /> -->\r\n        </div>\r\n        <div class=\"strip_head toggleleft adjusttop\" *ngIf=\"permissionAllow\">\r\n          <!-- <span class=\"report_head font-weight-bold\">Permissions</span> -->\r\n          <p-tabMenu [model]=\"items\" [activeItem]=\"activeItem\"></p-tabMenu>\r\n        </div>\r\n\r\n        <div *ngIf=\"firstTab\">\r\n          <div class=\"clearfix\"></div>\r\n          <div class=\"mt-2 mb-3\">\r\n            <div *ngIf=\"permissionAllow\">\r\n              <div class=\"permission-filter\">\r\n                <input class=\"form-control clearbox\" placeholder=\"Search by Permissions name\" type=\"text\"\r\n                  (keyup)=\"searchRolePermission($event)\" />\r\n                <i class=\"pi pi-times-circle\" (click)=\"clearPermission($event)\"></i>\r\n              </div>\r\n              <div class=\"d-flex align-items-center justify-content-center h-100 w-100 ng-star-inserted\"\r\n                *ngIf=\"!filterPermissions.length\">\r\n                <p>No Record Found</p>\r\n              </div>\r\n            </div>\r\n            <p-accordion class=\"w-100\">\r\n              <p-accordionTab class=\"w-100\" *ngFor=\"let page of permissions; let i = index\">\r\n                <ng-template pTemplate=\"header\">\r\n                  {{ page.description }}\r\n                </ng-template>\r\n                <ng-template pTemplate=\"content\">\r\n                  <div class=\"heading_analysis datamargin\">\r\n                    <div class=\"g-checkbox pl-1\">\r\n                      <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\"\r\n                        (change)=\"selectAllPage(i, $event)\" [checked]=\"page?.checked\" />\r\n                      <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <ul class=\"marginul_list ecms_rolescroll\">\r\n                    <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                      <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                        <li>\r\n                          <div class=\"inner_childaccess d-flex mt-0 py-1\">\r\n                            <div class=\"d-inline-flex align-items-center\">\r\n                              <label class=\"g-checkbox pl-1 mb-0\">\r\n                                <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                                  (change)=\"selectAllPrivilage(i, j, $event)\" id=\"description{{ j }}\" />\r\n                                <span class=\"checkmark\"></span>\r\n                              </label>\r\n                              <label for=\"description{{ j }}\" class=\"heading_role mb-0\">{{\r\n                                permission.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                        <li class=\"ml-1\" *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                          <div class=\"d-flex\">\r\n                            <div class=\"custom-control custom-switch\">\r\n                              <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                                id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\"\r\n                                (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                              <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                                privilege.description\r\n                                }}</label>\r\n                            </div>\r\n                          </div>\r\n                        </li>\r\n                      </ng-container>\r\n                      <ng-template #permissionOnly>\r\n                        <li>\r\n                          <div class=\"custom-control custom-switch\">\r\n                            <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                              (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                            <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                              permission.description }}\r\n                            </label>\r\n                          </div>\r\n                        </li>\r\n                      </ng-template>\r\n                    </ng-container>\r\n                  </ul>\r\n                </ng-template>\r\n              </p-accordionTab>\r\n            </p-accordion>\r\n            <div class=\"col-md-12 box d-none\" *ngFor=\"let page of permissions; let i = index\">\r\n              <div class=\"heading_analysis datamargin\">\r\n                <div class=\"Customcheckbox\">\r\n                  <input type=\"checkbox\" class=\"styled-checkbox\" id=\"custom{{ i }}\" (change)=\"selectAllPage(i, $event)\"\r\n                    [checked]=\"page?.checked\" />\r\n                  <label for=\"custom{{ i }}\" class=\"heading_role\">{{ page.description }}</label>\r\n                </div>\r\n              </div>\r\n\r\n              <ul class=\"marginul_list ecms_rolescroll\">\r\n                <ng-container *ngFor=\"let permission of page?.permissions; let j = index\">\r\n                  <ng-container *ngIf=\"isPrivilage(permission); else permissionOnly\">\r\n                    <li>\r\n                      <div class=\"inner_childaccess\">\r\n                        <label class=\"Customcheckbox\">\r\n                          <input type=\"checkbox\" [checked]=\"permission?.checked\"\r\n                            (change)=\"selectAllPrivilage(i, j, $event)\" />\r\n                          <span class=\"checkmark\"></span>\r\n                        </label>\r\n                        <span class=\"heading_role\">{{ permission.description }}</span>\r\n                      </div>\r\n                    </li>\r\n                    <li *ngFor=\"let privilege of permission?.permissions; let k = index\">\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"privilege?.checked\" class=\"custom-control-input\"\r\n                          id=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\" (click)=\"selectPrivilege(i, j, k, $event)\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroless{{ i }}{{ j }}{{ k }}\">{{\r\n                          privilege.description\r\n                          }}</label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-container>\r\n                  <ng-template #permissionOnly>\r\n                    <li>\r\n                      <div class=\"custom-control custom-switch\">\r\n                        <input type=\"checkbox\" [checked]=\"permission?.checked\" class=\"custom-control-input\"\r\n                          (click)=\"selectPage(i, j, $event)\" id=\"customSwitchesroles{{ i }}{{ j }}\" />\r\n                        <label class=\"custom-control-label\" for=\"customSwitchesroles{{ i }}{{ j }}\">{{\r\n                          permission.description }}\r\n                        </label>\r\n                      </div>\r\n                    </li>\r\n                  </ng-template>\r\n                </ng-container>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <button class=\"pull-right btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\" (click)=\"addRole()\">\r\n              {{ roleId ? 'Update' : 'Add' }} Role\r\n            </button>\r\n            <button class=\"pull-right mr-2 btn bg-white text-primary btncancel\" fieldKey=\"SETTINGS_ROL_CANCEL\"\r\n              (click)=\"cancel()\" [disabled]=\"!enableButton\">\r\n              Clear\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!firstTab\">\r\n\r\n          <div class=\"card flex justify-content-center mt-4\">\r\n            <p-tree [value]=\"mainMenuList\" [draggableNodes]=\"true\" [droppableNodes]=\"true\" draggableScope=\"self\"\r\n              droppableScope=\"self\" class=\"w-full md:w-30rem\" selectionMode=\"single\" [(selection)]=\"selectedFile\"\r\n              [validateDrop]=\"true\" (onNodeDrop)=\"nodeDrop($event)\"></p-tree>\r\n          </div>\r\n\r\n          <div class=\"mt-2\">\r\n            <button class=\"pull-right mb-2 btn btn-primary btncommon\" fieldKey=\"SETTINGS_ROL_ADD_ROLE\"\r\n              (click)=\"updateMenuOrder()\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <br />\r\n      </p-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"Deleteuser\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <p>{{ modalContent }}</p>\r\n        <div class=\"clearfix\"></div>\r\n        <div class=\"mt-2\">\r\n          <button class=\"pull-right mb-2 btn btn-primary btncommon delete\" data-dismiss=\"modal\" (click)=\"deleteRole()\"\r\n            *ngIf=\"deleteactive_user\">\r\n            Delete\r\n          </button>\r\n\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            *ngIf=\"deleteactive_buttonok\">\r\n            Cancel\r\n          </button>\r\n          <button class=\"pull-right mb-2 mr-2 btn bg-white text-primary btncancel\" data-dismiss=\"modal\"\r\n            *ngIf=\"!deleteactive_buttonok\">\r\n            OK\r\n          </button>\r\n        </div>\r\n\r\n        <div class=\"clearfix\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".head-div{padding-top:9px;padding-left:7px}.bgiconsearch{margin-bottom:5px;padding-bottom:0;font-size:var(--font-13)}.useracess{border-radius:2px;padding:5px 0;max-height:calc(100vh - 227px);overflow-y:auto}.userempty{max-width:none;border-radius:50%;height:35px;width:35px}.row.userdata{margin:0;border-bottom:solid 1px var(--table-border);padding:5px 0;cursor:pointer}.overflow_txt{overflow:hidden;text-overflow:ellipsis}span.nameuser{font-size:var(--font-16);color:var(--label-text);font-weight:400}.userid,span.emailuser{font-size:var(--font-15);color:#838383}.heading_analysis{padding-bottom:0;border-bottom:1px solid var(--table-border)}.Customcheckbox{position:relative;padding-top:0;padding-left:10px}.heading_role{padding-left:10px;font-size:var(--font-14);position:relative}.marginul_list{padding:0;margin:0}.marginul_list li{list-style:none;padding-top:5px}.marginul_list li label{color:var(--text-dark);text-transform:capitalize}.marginul_list.ecms_rolescroll{max-height:250px;overflow:auto;margin-bottom:20px}.ecms_rolescroll::-webkit-scrollbar{width:.5em;height:.5em}.ecms_rolescroll::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #0000004d;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}.ecms_rolescroll::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid slategrey}.inner_childaccess{margin-top:9px;margin-left:3px;border-bottom:1px solid var(--table-border)}.Customcheckbox input{display:inline-block}.Customcheckbox:hover input~.checkmark{border:solid 2px #2196f3}.Customcheckbox input~.checkmark{display:none}.Customcheckbox input:checked~.checkmark{display:none;border:solid 2px #1db766;background-color:#1db766}.Customcheckbox input:checked~.checkmark:after{display:block}.Customcheckbox .checkmark:after{left:6px;top:2px;width:5px;height:10px;border:solid #ffffff;border-width:0 2px 2px 0;transform:rotate(45deg)}.custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.custom-control.custom-switch.toggleleft .custom-control-label{padding-top:3px;font-size:var(--font-13)}.custom-switch .custom-control-label:after{top:calc(.25rem + 3px)}.toggle .custom-control-input:checked~.custom-control-label:before{color:#fff;border:#1db766!important;background:#1db766!important}.toggle .custom-control-input~.custom-control-label:before{color:#fff;border:#8c8c8c;background:#8c8c8c}.toggle .custom-control-label:after{background-color:#fff}.custom-switch .custom-control-label:before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-control-label:before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:18px;pointer-events:none;content:\"\";background-color:#fff;border:1px solid #adb5bd}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control input[type=checkbox]+label:before{content:\"\"}.custom-switch{padding-left:3.25rem}.toggleleft{font-size:var(--font-13);font-weight:600;display:block;margin-top:-12px;padding-bottom:13px}.report_button{margin-top:27px}.head-div .heading{font-weight:600}.right-icons .fa{margin-top:3px;display:inline-block;z-index:9}.right-icons .fa-trash{font-size:18px}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-tab .p-accordion-content{background:var(--bg-light);color:var(--text-dark);border-color:var(--table-border)}:host ::ng-deep .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link{background:var(--primary);color:var(--hover-text);border-color:var(--table-border)}.adjusttop{margin-top:60px;margin-bottom:-24px}:host ::ng-deep .p-tree .p-treenode-droppoint.p-treenode-droppoint-active{border:1px solid #89c8f7;height:30px;background:none!important}.permission-filter{margin:20px 0 10px;position:relative}.permission-filter i{position:absolute;right:8px;top:50%;cursor:pointer;margin-top:-.5rem;color:#6c757d}:host ::ng-deep .policygroup-v2 .p-multiselect-token-label{width:100%}:host ::ng-deep .policygroup-accordion .policygroup-v2.p-multiselect .p-multiselect-panel{top:auto!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1$1.FormBuilder }, { type: AlertService }, { type: MicrostrategyService }, { type: RbacService }, { type: DataStoreService }, { type: RbacService }]; } });

class RbacRolesComponent {
    permissionStore;
    _storeservice;
    RBACORG = new RBACINFO();
    PERMISSION;
    roleEvent;
    INPUTVALIDATIONMETHOD;
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
    }
    ngOnInit() {
        this.roleEvent.subscribe(val => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
            this._storeservice.setData('INPUTVALIDATIONMETHOD', this.INPUTVALIDATIONMETHOD);
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesComponent, deps: [{ token: PermissionStore }, { token: DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RbacRolesComponent, selector: "rbac-roles", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", roleEvent: "roleEvent", INPUTVALIDATIONMETHOD: "INPUTVALIDATIONMETHOD" }, ngImport: i0, template: `
      <roles></roles>
  `, isInline: true, dependencies: [{ kind: "component", type: RolesComponent, selector: "roles" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'rbac-roles', template: `
      <roles></roles>
  ` }]
        }], ctorParameters: function () { return [{ type: PermissionStore }, { type: DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], roleEvent: [{
                type: Input
            }], INPUTVALIDATIONMETHOD: [{
                type: Input
            }] } });

class DirectivesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, declarations: [PermissionDirective, ShowFieldDirective], imports: [CommonModule], exports: [PermissionDirective, ShowFieldDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DirectivesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PermissionDirective, ShowFieldDirective],
                    imports: [CommonModule],
                    exports: [PermissionDirective, ShowFieldDirective]
                }]
        }] });

class AlertModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AlertModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [AlertComponent],
                    exports: [AlertComponent]
                }]
        }] });

class PicsRbacRolesModule {
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

class RbacRolesModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesModule, declarations: [RbacRolesComponent], imports: [PicsRbacRolesModule,
            DropdownModule], exports: [RbacRolesComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesModule, imports: [PicsRbacRolesModule,
            DropdownModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RbacRolesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RbacRolesComponent
                    ],
                    imports: [
                        PicsRbacRolesModule,
                        DropdownModule
                    ],
                    exports: [
                        RbacRolesComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of rbac-roles
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RbacRolesComponent, RbacRolesModule, RbacRolesService };
//# sourceMappingURL=pics-core-rbac-roles.mjs.map
