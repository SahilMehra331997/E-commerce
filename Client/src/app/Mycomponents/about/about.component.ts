import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,MatPaginatorModule],
  template: `
         <div class="container mt-3">
          <h2>Paginator example</h2>
           <ul>
             <li *ngFor="let item of displayedItems">
               {{ item }}
             </li>
           </ul>
         </div>
         <mat-paginator
           [length]="totalItems"
           [pageSize]="pageSize"
           [pageSizeOptions]="pageSizeOptions"
           (page)="onPageChange($event)">
         </mat-paginator>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {
   constructor(){}
   
   pageSize = 10;
   pageSizeOptions: number[] = [5, 10, 25, 100]; 

   Items:string[] = ["grouping", "group", "batch", "bunch", "cluster", "band", "lot", "battery", "crop", "team", "constellation", "crew", "body", "platoon", "clutch", "collective", "parcel", "party", "organization", "consort", "squadron", "gathering", "battalion", "circle", "passel", "assembly", "huddle", "brigade", "school", "knot", "round", "boodle", "congregation", "the whole kit and caboodle", "gang", "coterie", "posse", "set", "task force", "phalanx", "clique", "ring", "clan", "bevy", "coalition", "sect", "faction", "gild", "union", "federation", "guild", "muster", "confederacy", "outfit", "order", "alliance", "bloc", "league", "brood", "fellowship", "covey", "confederation", "Antonyms & Near Antonyms", "individual", "single", "as in attire", "dressy clothing", "dressed in festive array for the city's annual New Year's Eve celebration", "Synonyms & Similar Words","attire", "costume", "full dress", "finery", "gayety", "apparel", "regalia", "bravery", "best", "glad rags", "threads", "best bib and tucker", "feather", "caparison", "gaiety", "frippery", "raiment", "vesture", "rigging", "rags", "toggery", "rig", "wear", "vestiary", "duds", "togs", "Antonyms & Near Antonyms" , "disarray", "tatters", "dishabille", "as in sequence", "the way objects in space or events in time are arranged or follow one another", "a marching band's carefully choreographed array", "Synonyms & Similar Words", "sequence", "arrangement", "distribution", "ordering", "disposition", "setup", "disposal", "order", "layout", "chain", "continuity", "series", "procession", "design", "structure", "precedence"];
   totalItems =this.Items.length;
 
   displayedItems: String[] = [];
 
   ngOnInit(): void {
     this.loadItems(0, this.pageSize);
   }
 
   loadItems(pageIndex: number, pageSize: number): void {
     const startIndex = pageIndex * pageSize;
     this.displayedItems = this.Items.slice(startIndex, startIndex + pageSize);
  }
 
   onPageChange(event: PageEvent): void {
     const { pageIndex, pageSize } = event;
     this.loadItems(pageIndex, pageSize);
   }
  
}
