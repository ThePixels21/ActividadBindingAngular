import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  temp = ''
  @Input() search = ''
  @Output() searchChange = new EventEmitter<string>()

  sendToDashboard(){
    this.search = this.temp
    this.temp = ''
    this.searchChange.emit(this.search)
  }

}
