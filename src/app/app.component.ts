import { Component, ViewChild } from '@angular/core';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import 'powerbi-report-authoring';
import {token} from './tokenad';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(PowerBIReportEmbedComponent) reportObj!: PowerBIReportEmbedComponent;
  phasedEmbeddingFlag = false;

  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=169bfeea-b150-4e2b-a3c7-c42f85a8af43&groupId=ed7a3828-79de-4f8c-aa58-0834a6a721cf',
    tokenType: models.TokenType.Embed,
    id: '169bfeea-b150-4e2b-a3c7-c42f85a8af43',
    accessToken: token,
    settings: undefined,
  };

}

