import { DataStoreService } from './data-store.service';
import * as i0 from "@angular/core";
export declare class MicrostrategyService {
    private _storeservice;
    dossierList: any;
    RBACORG: any;
    environment: any;
    httpService: any;
    constructor(_storeservice: DataStoreService);
    getLibraryDetails(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<MicrostrategyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MicrostrategyService>;
}
