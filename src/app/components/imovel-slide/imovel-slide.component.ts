import { Component, Input, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';

@Component({
  selector: 'app-imovel-slide',
  templateUrl: './imovel-slide.component.html',
  styleUrls: ['./imovel-slide.component.css']
})
export class ImovelSlideComponent implements OnInit {

  listaDeImoveis: ImoveisApiModel[]=[];

  constructor(public imoveisApi: ImoveisApiService) { }

  ngOnInit(): void {
    this.imoveisApi.get().subscribe({
      next: (retornoDaApi)=>{
        this.listaDeImoveis = retornoDaApi;
      }
    })
  }

  count:number=0;
  image:string=this.listaDeImoveis[this.count].image;
  next():void {
    if (this.count<this.listaDeImoveis.length)
    this.count++;
  }
  previous():void{
    if (this.count>this.listaDeImoveis.length)
    this.count--;
  }
}
