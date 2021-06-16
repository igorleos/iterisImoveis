import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ImoveisPageComponent } from './components/imoveis-page/imoveis-page.component';
import { HttpClientModule } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card';
import { ImovelCardComponent } from './components/imovel-card/imovel-card.component';
import { ImovelSlideComponent } from './components/imovel-slide/imovel-slide.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuTemplateComponent,
    SobrePageComponent,
    HomePageComponent,
    ImoveisPageComponent,
    ImovelCardComponent,
    ImovelSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
