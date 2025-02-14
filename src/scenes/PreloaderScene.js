import { Scene } from 'phaser';
import {scrmng} from "../core/scrmng.js";

export class PreloaderScene extends Scene {
    constructor () {
        super('PreloaderScene');
    }

    init () {
        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(scrmng.getCenterX(), scrmng.getCenterY(), 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(scrmng.getCenterX()-230, scrmng.getCenterY(), 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on('progress', (progress) => {
            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);
        });
    }

    preload () {
        //  Load the assets for the game - Replace with your own assets
        this.load.setPath('./src/assets/');

        this.load.image('back', 'back.jpg');
        this.load.spine('background_base_SPO', 'background_base.json', 'background_base.atlas');
        this.load.spine('intro_SPO', 'intro.json', 'intro.atlas');
        this.load.spine('booster_SPO', 'booster.json', 'booster.atlas');


        this.load.setPath('./src/assets/video/');

        this.load.video('belatra_video', 'belatra-intro.webm');
        this.load.video('video_main_page', 'video-main-page.webm');

        this.load.video('00', 'WIN_MAKE_IT_GOLD.webm');
        this.load.video('01', 'Você é o jackpot.webm');
        this.load.video('02', 'Você se torna batata.webm');
        this.load.video('03', 'Você nasceu, filho.webm');
        this.load.video('04', 'Você fica loira.webm');
        this.load.video('05', 'Texto ex acidentalmente.webm');
        this.load.video('06', 'Telefone encontra banheiro.webm');
        this.load.video('07', 'Silenciar o barulho.webm');
        this.load.video('08', 'Siga seu caminho.webm');
        this.load.video('09', 'Sexy demais.webm');
        this.load.video('10', 'Ronco estomacal alto.webm');
        this.load.video('11', 'Queime pontes inúteis.webm');
        this.load.video('12', 'Por que tão preocupado.webm');
        this.load.video('13', 'Peidos incontroláveis começam.webm');
        this.load.video('14', 'Pare de ficar de pé, dance.webm');
        this.load.video('15', 'Papel higiênico trai.webm');
        this.load.video('16', 'Os mosquitos escolhem seu líder.webm');
        this.load.video('17', 'Os medos desaparecerão.webm');
        this.load.video('18', 'O perdão muda tudo.webm');
        this.load.video('19', 'O mar te despe.webm');
        this.load.video('20', 'O destino encontra você.webm');
        this.load.video('21', 'O amor não vai mentir.webm');
        this.load.video('22', 'Não apresse o destino.webm');
        this.load.video('23', 'Noite de paixão esta noite.webm');
        this.load.video('24', 'Nenhuma mudança de gênero hoje.webm');
        this.load.video('25', 'Hora de reforma.webm');
        this.load.video('26', 'Gravidez de cerveja confirmada.webm');
        this.load.video('27', 'Gatos ignoram você.webm');
        this.load.video('28', 'Fantasma dá sinal.webm');
        this.load.video('29', 'Fale o desejo em voz alta.webm');
        this.load.video('30', 'Espere, não, corra!.webm');
        this.load.video('31', 'Escreva, isso acontece.webm');
        this.load.video('32', 'Cuidado com João.webm');
        this.load.video('33', 'Cringe está chegando.webm');
        this.load.video('34', 'Confie no seu coração.webm');
        this.load.video('35', 'Cocô de pássaro com precisão.webm');
        this.load.video('36', 'Chamadas para a ala psiquiátrica.webm');
        this.load.video('37', 'Cerveja é resposta.webm');
        this.load.video('38', 'Calças rasgadas publicamente.webm');
        this.load.video('39', 'Calvície combina com você.webm');
        this.load.video('40', 'Beije o espectador.webm');
        this.load.video('41', 'Beba primeiro, pense depois.webm');
        this.load.video('42', 'Arroz queima hoje.webm');
        this.load.video('43', 'Aposte tudo no 9.webm');
        this.load.video('44', 'Alguém vai apostar em você.webm');
        this.load.video('45', 'Alguém observa você.webm');
        this.load.video('46', 'Alguém está gemendo esta noite.webm');
        this.load.video('47', 'Agir por impulso.webm');
        this.load.video('48', 'a vitória está próxima.webm');
        this.load.video('49', 'A resposta vem inesperadamente.webm');
        this.load.video('50', 'A memória retorna em breve.webm');
    }

    create () {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the VideoScene. You could also swap this for a Scene Transition, such as a camera fade.

        this.scene.start('VideoScene');
        //this.scene.start('GameScene');
        //this.scene.start('SlotScene');
        //this.scene.start('SlotScene');
    }
}
