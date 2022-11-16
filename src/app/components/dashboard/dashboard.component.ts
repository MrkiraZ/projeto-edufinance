import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movimentacao } from 'src/app/interfaces/movimentacao';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MovimentacaoService } from '../../services/movimentacao.service';
import * as echarts from 'echarts';
import { CarteiraService } from '../../services/carteira.service';
import { Carteira } from 'src/app/interfaces/carteira';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private movimentacaoService: MovimentacaoService,
    private carteirasService: CarteiraService
  ) {}
  usuario: Usuario = {};
  movimentacoes: Movimentacao[] = [];
  carteiras: Carteira[] = [];
  erro: string = '';
  storage: Storage = localStorage;

  ngOnInit(): void {
    this.usuarioService
      .getUsuarioApi(this.storage.getItem(`usuario`) as string)
      .subscribe((res) => {
        this.usuario = res;
      });
    this.movimentacaoService
      .getMovimentacaosPorCpfApi(this.storage.getItem(`usuario`) as string)
      .subscribe((res) => {
        this.loadChartPie(res);
        this.movimentacoes=res
      });
    this.carteirasService.getCarteirasPorCpfApi(this.storage.getItem(`usuario`) as string)
    .subscribe((res) => {this.carteiras=res})
  }
  loadChartPie(res: Movimentacao[]) {
    let totais = this.somaDespesas(res);

    type EChartsOption = echarts.EChartsOption;

    let chartDom = document.getElementById(`total`)!;
    let myChart = echarts.init(chartDom);
    let option: EChartsOption;
    option = {
      title: {
        name: 'Categorias',
        left: 'left',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle: {
          color: '#ccc',
        },
      },
      series: [
        {
          name: 'Movimentação da carteira',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#25789',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: totais[0], name: 'Entrada' },
            { value: totais[1], name: 'Saida' },
          ],
        },
      ],
    };

    option && myChart.setOption(option);
  }
  somaDespesas(movimentacoes: Movimentacao[]) {
    let entrada: number = 0;
    let saida: number = 0;
    let totais: number[] = [0, 0];
    movimentacoes.forEach((element) => {
      if ((element.tipo as string) == 'Saida') {
        saida += element.valor as number;
      } else {
        entrada += element.valor as number;
      }
      totais[0] = entrada;
      totais[1] = saida;
    });
    return totais;
  }
}
