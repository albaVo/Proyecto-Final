import { LayoutContext, MenuProvider } from '@/context'
import Link from 'next/link';
import React, { useContext } from 'react'
import { AppMenuItem } from '@/types/types';
import AppMenuitem from './AppMenuItem';

const AppMenu = () => {

    const { layoutConfig } = useContext(LayoutContext);

    const model: AppMenuItem[] = [
        {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/admin' }]
        },
        {
            label: 'Base de datos',
            items: [
                { label: 'Productos', icon: 'pi pi-fw pi-shopping-bag', to: '/admin/productos' },
                { label: 'Pedidos', icon: 'pi pi-fw pi-truck', to: '/admin/pedidos' },
                { label: 'Usuarios', icon: 'pi pi-fw pi-users', to: '/admin/usuarios' },
                { label: 'Direcciones', icon: 'pi pi-fw pi-envelope', to: '/admin/direcciones' },
                { label: 'Proveedores', icon: 'pi pi-fw pi-shopping-cart', to: '/admin/proveedores' },
                { label: 'Categorias', icon: 'pi pi-fw pi-bookmark', to: '/admin/categorias' },
                { label: 'Subcategorias', icon: 'pi pi-fw pi-list', to: '/admin/subcategorias' },
            ]
        }
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    )
}

export default AppMenu