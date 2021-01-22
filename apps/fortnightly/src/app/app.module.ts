import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule, Routes } from '@angular/router'

// material
import { MatRippleModule } from '@angular/material/core'
import { MatTabsModule } from '@angular/material/tabs'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card'

// page
import { HomeComponent } from './home/home.component'
import { ArticleDetailComponent } from './article-detail/article-detail.component'

// components
import { ArticleComponent } from './components/article/article.component'
import { CardComponent } from './components/card/card.component'
import { ChipsComponent } from './components/chips/chips.component'
import { GridCardComponent } from './components/grid-card/grid-card.component'
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component'
import { ListHorizontalCardComponent } from './components/list-horizontal-card/list-horizontal-card.component'
import { ListStockComponent } from './components/list-stock/list-stock.component'
import { MenuDrawerComponent } from './components/menu-drawer/menu-drawer.component'
import { SearchBoxComponent } from './components/search-box/search-box.component'
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component'
import { StockComponent } from './components/stock/stock.component'
import { StockChartComponent } from './components/stock-chart/stock-chart.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { StickyDirective } from './sticky.directive'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: ':id', component: HomeComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleDetailComponent,
    ArticleComponent,
    CardComponent,
    ChipsComponent,
    GridCardComponent,
    HorizontalCardComponent,
    ListHorizontalCardComponent,
    ListStockComponent,
    MenuDrawerComponent,
    SearchBoxComponent,
    SearchDialogComponent,
    StockComponent,
    StockChartComponent,
    TabsComponent,
    StickyDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatRippleModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
