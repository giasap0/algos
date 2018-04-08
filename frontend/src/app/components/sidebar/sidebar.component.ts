import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	public isHidden: boolean = true;
	constructor() { }

	ngOnInit() {
		this.isHidden = true;
	}

	public closeSidebar() {
		this.isHidden = true;
	}

	public toggleSidebar() {
		this.isHidden = !this.isHidden;
	}
}

