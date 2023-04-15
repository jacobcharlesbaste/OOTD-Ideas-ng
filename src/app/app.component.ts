import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})

export class AppComponent implements OnInit {  
  constructor(  
    private metaTagService: Meta  
  ) { }  
    
  ngOnInit() {  
    this.metaTagService.addTags([  
      { name: 'verify-admitad', content: '5e9108d548' },  
    ]);  
        
  }  
}
