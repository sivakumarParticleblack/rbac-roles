export class RoleConfig {
}
RoleConfig.EndPoint = {
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
export class UserConfig {
}
UserConfig.EndPoint = {
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
export class AttachmentConfig {
}
AttachmentConfig.EndPoint = {
    Attachments: {
        GetAttachmentReferral: '/ref/attachment/referral',
        GetCategoryLookup: '/platform/master/lookup/lookupbycategoryname',
        UploadKey: '/common/files/upload-key',
        DownloadKey: '/common/files/download-key',
        PostAttachment: '/ref/attachment/create',
        PutAttachment: '/ref/attachment'
    }
};
export class PolicyGroupConfig {
}
PolicyGroupConfig.EndPoint = {
    policyGroup: {
        getPolicyGroupList: '/platform/page-designer/policyGroup',
        getAllPolicyGroupList: '/platform/page-designer/policyGroup/all',
        createPolicyGroup: '/platform/page-designer/policyGroup',
        getOrgPolicyGroups: '/platform/page-designer/policyGroup/organization/{organizationid}'
    }
};
export class PermissionsURL {
}
PermissionsURL.EndPoints = {
    permission: {
        permissionRoleById: '/access-control/permission/role/{id}',
    },
    page: {
        getPageInformation: '/org/user/page/menulist/{id}',
        updateMenuOrder: '/access-control/permission/updateMenuOrder'
    }
};
export class RBACINFO {
    constructor() {
        this.apiHost = '';
        this.tokenKey = '';
    }
}
export class Environment {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy11cmwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcm9sZXMvc3JjL2xpYi9waWNzLXJiYWMtcm9sZXMvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUN2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLFVBQVUsRUFBRSw2QkFBNkI7UUFDekMsY0FBYyxFQUFFLDRCQUE0QjtRQUM1QyxjQUFjLEVBQUUsc0JBQXNCO1FBQ3RDLGFBQWEsRUFBRSwyQ0FBMkM7UUFDMUQsT0FBTyxFQUFFLFVBQVU7S0FDcEI7SUFDRCxhQUFhLEVBQUU7UUFDYixLQUFLLEVBQUUsK0JBQStCO1FBQ3RDLFVBQVUsRUFBRSxpQ0FBaUM7S0FDOUM7Q0FDRixDQUFDO0FBR0osTUFBTSxPQUFPLFVBQVU7O0FBQ1AsbUJBQVEsR0FBRztJQUV2QixJQUFJLEVBQUU7UUFDSixjQUFjLEVBQUUsV0FBVztRQUMzQix3QkFBd0IsRUFBRSxxQ0FBcUM7UUFDL0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxVQUFVLEVBQUUsa0JBQWtCO1FBQzlCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsZUFBZSxFQUFFLDJCQUEyQjtRQUM1QyxpQkFBaUIsRUFBRSx5QkFBeUI7S0FDN0M7SUFDRCxRQUFRLEVBQUU7UUFDUixlQUFlLEVBQUUsZUFBZTtRQUNoQyxrQkFBa0IsRUFBRSxzQkFBc0I7UUFDMUMsZUFBZSxFQUFFLDhCQUE4QjtLQUNoRDtDQUNGLENBQUM7QUFFSixNQUFNLE9BQU8sZ0JBQWdCOztBQUNiLHlCQUFRLEdBQUc7SUFDdkIsV0FBVyxFQUFFO1FBQ1gscUJBQXFCLEVBQUUsMEJBQTBCO1FBQ2pELGlCQUFpQixFQUFFLDhDQUE4QztRQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsY0FBYyxFQUFFLHdCQUF3QjtRQUN4QyxhQUFhLEVBQUUsaUJBQWlCO0tBQ2pDO0NBQ0YsQ0FBQztBQUVKLE1BQU0sT0FBTyxpQkFBaUI7O0FBQ2QsMEJBQVEsR0FBRztJQUN2QixXQUFXLEVBQUU7UUFDWCxrQkFBa0IsRUFBRSxxQ0FBcUM7UUFDekQscUJBQXFCLEVBQUUseUNBQXlDO1FBQ2hFLGlCQUFpQixFQUFFLHFDQUFxQztRQUN4RCxrQkFBa0IsRUFBRSxtRUFBbUU7S0FDeEY7Q0FDRixDQUFDO0FBRUosTUFBTSxPQUFPLGNBQWM7O0FBQ1gsd0JBQVMsR0FBRztJQUN4QixVQUFVLEVBQUU7UUFDVixrQkFBa0IsRUFBRSxzQ0FBc0M7S0FDM0Q7SUFDRCxJQUFJLEVBQUU7UUFDSixrQkFBa0IsRUFBRSw4QkFBOEI7UUFDbEQsZUFBZSxFQUFFLDRDQUE0QztLQUM5RDtDQUNGLENBQUM7QUFHSixNQUFNLE9BQU8sUUFBUTtJQUFyQjtRQUNFLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBSWhCLENBQUM7Q0FBQTtBQUNELE1BQU0sT0FBTyxXQUFXO0NBT3ZCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJvbGVDb25maWcge1xuICBwdWJsaWMgc3RhdGljIEVuZFBvaW50ID0ge1xuICAgIHJvbGU6IHtcbiAgICAgIGdldEFsbFVzZXJSb2xlOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxuICAgICAgY3JlYXRlUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL2NyZWF0ZScsXG4gICAgICBnZXRMYW5kaW5nUGFnZTogJy9wbGF0Zm9ybS9tZW51L2FwcGxpY2F0aW9uJyxcbiAgICAgIGFkZFBvbGljeUdyb3VwOiAnL2FjY2Vzcy1jb250cm9sL3JvbGUnLFxuICAgICAgZ2V0QWxsT3JnUm9sZTogJy9hY2Nlc3MtY29udHJvbC9yb2xlL29yZ2FuaXphdGlvbi97b3JnaWR9JyxcbiAgICAgIGRvc3NpZXI6ICcvZG9zc2llcidcbiAgICB9LFxuICAgIG1pY3Jvc3RyYXRlZ3k6IHtcbiAgICAgIGxvZ2luOiAnL3BsYXRmb3JtL21pY3Jvc3RyYXRlZ3kvbG9naW4nLFxuICAgICAgZ2V0TGlicmFyeTogJy9wbGF0Zm9ybS9taWNyb3N0cmF0ZWd5L2xpYnJhcnknXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgVXNlckNvbmZpZyB7XG4gIHB1YmxpYyBzdGF0aWMgRW5kUG9pbnQgPSB7XG5cbiAgICBVc2VyOiB7XG4gICAgICBnZXRBbGxVc2VyTGlzdDogJy9vcmcvdXNlcicsXG4gICAgICBnZXRBbGxVc2VyQWN0aXZlSW5hY3RpdmU6ICcvb3JnL3VzZXI/aW5jbHVkZUluYWN0aXZlVXNlcnM9dHJ1ZScsXG4gICAgICBhY3RpdmF0ZVVzZXI6ICcvb3JnL3VzZXIvYWN0aXZhdGUnLFxuICAgICAgY3JlYXRlVXNlcjogJy9vcmcvdXNlci9jcmVhdGUnLFxuICAgICAgdXNlclJvbGU6ICcvb3JnL3VzZXIvcm9sZScsXG4gICAgICBtYW5hZ2VtZW50Z3JvdXA6ICcvb3JnL3RlYW0vbWFuYWdlbWVudGdyb3VwJyxcbiAgICAgIGdldEFsbFVzZXJPcmdMaXN0OiAnL29yZy91c2VyL29yZ2FuaXphdGlvbi8nXG4gICAgfSxcbiAgICBQcm92aWRlcjoge1xuICAgICAgZ2V0UHJvdmlkZXJMaXN0OiAnL3JlZi9wcm92aWRlcicsXG4gICAgICBzZWFyY2hQcm92aWRlckxpc3Q6ICcvcmVmL3Byb3ZpZGVyL3NlYXJjaCcsXG4gICAgICBhZGRQcm92aWRlclVzZXI6ICcvcmVmL3Byb3ZpZGVyL2NyZWF0ZS9hY2NvdW50J1xuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50Q29uZmlnIHtcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcbiAgICBBdHRhY2htZW50czoge1xuICAgICAgR2V0QXR0YWNobWVudFJlZmVycmFsOiAnL3JlZi9hdHRhY2htZW50L3JlZmVycmFsJyxcbiAgICAgIEdldENhdGVnb3J5TG9va3VwOiAnL3BsYXRmb3JtL21hc3Rlci9sb29rdXAvbG9va3VwYnljYXRlZ29yeW5hbWUnLFxuICAgICAgVXBsb2FkS2V5OiAnL2NvbW1vbi9maWxlcy91cGxvYWQta2V5JyxcbiAgICAgIERvd25sb2FkS2V5OiAnL2NvbW1vbi9maWxlcy9kb3dubG9hZC1rZXknLFxuICAgICAgUG9zdEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQvY3JlYXRlJyxcbiAgICAgIFB1dEF0dGFjaG1lbnQ6ICcvcmVmL2F0dGFjaG1lbnQnXG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGNsYXNzIFBvbGljeUdyb3VwQ29uZmlnIHtcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcbiAgICBwb2xpY3lHcm91cDoge1xuICAgICAgZ2V0UG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxuICAgICAgZ2V0QWxsUG9saWN5R3JvdXBMaXN0OiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvYWxsJyxcbiAgICAgIGNyZWF0ZVBvbGljeUdyb3VwOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAnLFxuICAgICAgZ2V0T3JnUG9saWN5R3JvdXBzOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcG9saWN5R3JvdXAvb3JnYW5pemF0aW9uL3tvcmdhbml6YXRpb25pZH0nXG4gICAgfVxuICB9O1xufVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zVVJMIHtcbiAgcHVibGljIHN0YXRpYyBFbmRQb2ludHMgPSB7XG4gICAgcGVybWlzc2lvbjoge1xuICAgICAgcGVybWlzc2lvblJvbGVCeUlkOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vcm9sZS97aWR9JyxcbiAgICB9LFxuICAgIHBhZ2U6IHtcbiAgICAgIGdldFBhZ2VJbmZvcm1hdGlvbjogJy9vcmcvdXNlci9wYWdlL21lbnVsaXN0L3tpZH0nLFxuICAgICAgdXBkYXRlTWVudU9yZGVyOiAnL2FjY2Vzcy1jb250cm9sL3Blcm1pc3Npb24vdXBkYXRlTWVudU9yZGVyJ1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIFJCQUNJTkZPIHtcbiAgYXBpSG9zdCA9ICcnO1xuICB0b2tlbktleSA9ICcnO1xuICBvdGhlcnM/OiBhbnk7XG4gIG9yZ0lEPzogYW55O1xuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50O1xufVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcbiAgbXN0clVzZXJuYW1lPzogc3RyaW5nO1xuICBtc3RyUGFzc3dvcmQ/OiBzdHJpbmc7XG4gIG1zdHJVUkw/OiBzdHJpbmc7XG4gIG1zdHJQcm9qZWN0SUQ/OiBzdHJpbmc7XG4gIGFwcGxpY2F0aW9uaWQ/OiBzdHJpbmc7XG4gIHByaW9yaXR5Pzogc3RyaW5nXG59XG5cbiJdfQ==