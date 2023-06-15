import { LayoutContext } from "@/context/admin/layoutcontext";
import { AppTopbarRef } from "@/types/types";
import Link from "next/link"
import { classNames } from "primereact/utils";
import { forwardRef, useContext, useRef, useImperativeHandle } from "react";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    return (
        <div className="layout-topbar">
            <Link href="/admin" className="layout-topbar-logo">
                <img src="/images/logo_icono.png"/>
                <span>OLYMPUSARCADE</span>
            </Link>
    
            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>
    
            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>
    
            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <button type="button" className="p-link layout-topbar-button">
                    <a href="/admin/calendario">
                        <i className="pi pi-calendar"></i>
                        <span>Calendario</span>
                    </a>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <a href="/admin/usuario">
                        <i className="pi pi-user"></i>
                        <span>Perfil</span>
                    </a>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <a href="/admin/ajustes">
                        <i className="pi pi-cog"></i>
                        <span>Ajustes</span>
                    </a>
                </button>
            </div>
        </div>
    )
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;