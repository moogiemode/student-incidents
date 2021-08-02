import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  faSearch,
  faCloudUploadAlt,
  faList,
  faFileDownload,
  faFilter,
  faChevronRight,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  faSearch = faSearch;
  faCloudUploadAlt = faCloudUploadAlt;
  faList = faList;
  faFileDownload = faFileDownload;
  faFilter = faFilter;
  faChevronRight = faChevronRight;
  faChevronDown = faChevronDown;
  constructor(private route: ActivatedRoute) {}
  // name: any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // this.name = params['name'];
    });
  }
}
