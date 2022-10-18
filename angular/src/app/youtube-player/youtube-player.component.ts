import { Component, OnInit } from '@angular/core';
import {SongService} from '../service/song.service';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  song: any;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id:any = paramMap.get('id');
      this.song = this.songService.findSongById(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}