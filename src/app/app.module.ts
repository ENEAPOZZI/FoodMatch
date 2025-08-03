import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormfoodComponent } from './Components/formfood/formfood.component';
import { PrinpCardComponent } from './Components/prinp-card/prinp-card.component';
import { FilterBarComponent } from './Components/filter-bar/filter-bar.component';
import { PopUpSpiegazioneComponent } from './Components/pop-up-spiegazione/pop-up-spiegazione.component';
import { NavBarComponent } from './MainComponets/nav-bar/nav-bar.component';
import { FooterComponent } from './MainComponets/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { PreferitiComponent } from './Pages/preferiti/preferiti.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorTokenInterceptor } from './Interceptors/interceptor-token.interceptor';
import { DettaglioComponent } from './Pages/dettaglio/dettaglio.component';
import { InterceptorPaginationInterceptor } from './Interceptors/interceptor-pagination.interceptor';
import { PaginationHomeComponent } from './Components/pagination-home/pagination-home.component';
import { ErrorMexComponent } from './Components/error-mex/error-mex.component';

@NgModule({
  declarations: [
    AppComponent,
    FormfoodComponent,
    PrinpCardComponent,
    FilterBarComponent,
    PopUpSpiegazioneComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PreferitiComponent,
    DettaglioComponent,
    PaginationHomeComponent,
    ErrorMexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorPaginationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
