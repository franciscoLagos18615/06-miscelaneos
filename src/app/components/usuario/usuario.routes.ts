import { Router} from '@angular/router';



import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';



export const USUARIO_ROUTES: Routes = [
    //arreglo de rutas hijas

      {path: 'nuevo', component: UsuarioNuevoComponent},
      {path: 'editar', component: UsuarioEditarComponent},
      {path: 'detalle', component: UsuarioDetalleComponent},
      {path: '**', pathMatch : 'full', redirectTo: 'nuevo'}

];


