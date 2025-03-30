import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QubitInformationComponent } from './qubit-information/qubit-information.component';
import { ProblemsInformationComponent } from './problems-information/problems-information.component';
import { QuantumMechanicsInformationComponent } from './quantum-mechanics-information/quantum-mechanics-information.component';
import { TypesInformationComponent } from './types-information/types-information.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'qubit', component: QubitInformationComponent},
    {path: 'problems', component: ProblemsInformationComponent},
    {path: 'quantum-mechanics', component: QuantumMechanicsInformationComponent},
    {path: 'types', component: TypesInformationComponent},
    {path: '**', redirectTo: '' }
];
