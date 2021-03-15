import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

// Assume you have the following data
const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: '../../../../assets/images/camera1.jpg',
    previewUrl: '../../../../assets/images/camera1.jpg'
  },
];

@Component({
  selector: 'ngx-default-gallery',
  styleUrls: ['./default-gallery.component.scss'],
  templateUrl: './default-gallery.component.html',
})
export class DefaultGalleryComponent implements OnInit {

  galleryId = 'gallery';

  public items: GalleryItem[] = data.map(item =>
    new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
  );
  

  constructor(private gallery: Gallery) {
  }

  ngOnInit() {
    // Load items into gallery
    
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.setConfig({
    });
    // galleryRef.load(this.items);
  }

}
