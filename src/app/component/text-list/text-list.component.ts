import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Text } from '../../model/text'
import { TextService } from '../../service/text.service';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.css']
})
export class TextListComponent implements OnInit {

  public dataSource = new MatTableDataSource<Text>();

  displayedColumns = ['title', 'userId', 'body'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private textService: TextService) { }

  ngOnInit(): void {
    this.textService.findAll().subscribe(data => this.dataSource.data = data as Text[]);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}
