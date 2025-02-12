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
        this.load.setPath('assets');
        
        this.load.video('belatra_video', 'belatra-intro.mp4');
        this.load.video('video_main_page', 'video-main-page.mp4');
        this.load.image('back', 'back.jpg');
        this.load.spine('background_base_SPO', 'background_base.json', 'background_base.atlas');
        this.load.spine('intro_SPO', 'intro.json', 'intro.atlas');
        this.load.spine('booster_SPO', 'booster.json', 'booster.atlas');
        this.load.spine('bg_game_SPO', 'bg_game.json', 'bg_game.atlas');
        this.load.spine('frame_green_SPO', 'frame_green.json', 'frame_green.atlas');
        this.load.spine('frame_yellow_SPO', 'frame_yellow.json', 'frame_yellow.atlas');
        this.load.spine('green_glow_SPO', 'green_glow.json', 'green_glow.atlas');
        this.load.spine('yellow_glow_SPO', 'yellow_glow.json', 'yellow_glow.atlas');

        this.load.setPath('assets/video');
        this.load.video('00', 'WIN_MAKE_IT_GOLD.mp4');
        this.load.video('01', 'Você é o jackpot.mp4');
        this.load.video('02', 'Você se torna batata.mp4');
        this.load.video('03', 'Você nasceu, filho.mp4');
        this.load.video('04', 'Você fica loira.mp4');
        this.load.video('05', 'Texto ex acidentalmente.mp4');
        this.load.video('06', 'Telefone encontra banheiro.mp4');
        this.load.video('07', 'Silenciar o barulho.mp4');
        this.load.video('08', 'Siga seu caminho.mp4');
        this.load.video('09', 'Sexy demais.mp4');
        this.load.video('10', 'Ronco estomacal alto.mp4');
        this.load.video('11', 'Queime pontes inúteis.mp4');
        this.load.video('12', 'Por que tão preocupado.mp4');
        this.load.video('13', 'Peidos incontroláveis começam.mp4');
        this.load.video('14', 'Pare de ficar de pé, dance.mp4');
        this.load.video('15', 'Papel higiênico trai.mp4');
        this.load.video('16', 'Os mosquitos escolhem seu líder.mp4');
        this.load.video('17', 'Os medos desaparecerão.mp4');
        this.load.video('18', 'O perdão muda tudo.mp4');
        this.load.video('19', 'O mar te despe.mp4');
        this.load.video('20', 'O destino encontra você.mp4');
        this.load.video('21', 'O amor não vai mentir.mp4');
        this.load.video('22', 'Não apresse o destino.mp4');
        this.load.video('23', 'Noite de paixão esta noite.mp4');
        this.load.video('24', 'Nenhuma mudança de gênero hoje.mp4');
        this.load.video('25', 'Hora de reforma.mp4');
        this.load.video('26', 'Gravidez de cerveja confirmada.mp4');
        this.load.video('27', 'Gatos ignoram você.mp4');
        this.load.video('28', 'Fantasma dá sinal.mp4');
        this.load.video('29', 'Fale o desejo em voz alta.mp4');
        this.load.video('30', 'Espere, não, corra!.mp4');
        this.load.video('31', 'Escreva, isso acontece.mp4');
        this.load.video('32', 'Cuidado com João.mp4');
        this.load.video('33', 'Cringe está chegando.mp4');
        this.load.video('34', 'Confie no seu coração.mp4');
        this.load.video('35', 'Cocô de pássaro com precisão.mp4');
        this.load.video('36', 'Chamadas para a ala psiquiátrica.mp4');
        this.load.video('37', 'Cerveja é resposta.mp4');
        this.load.video('38', 'Calças rasgadas publicamente.mp4');
        this.load.video('39', 'Calvície combina com você.mp4');
        this.load.video('40', 'Beije o espectador.mp4');
        this.load.video('41', 'Beba primeiro, pense depois.mp4');
        this.load.video('42', 'Arroz queima hoje.mp4');
        this.load.video('43', 'Aposte tudo no 9.mp4');
        this.load.video('44', 'Alguém vai apostar em você.mp4');
        this.load.video('45', 'Alguém observa você.mp4');
        this.load.video('46', 'Alguém está gemendo esta noite.mp4');
        this.load.video('47', 'Agir por impulso.mp4');
        this.load.video('48', 'a vitória está próxima.mp4');
        this.load.video('49', 'A resposta vem inesperadamente.mp4');
        this.load.video('50', 'A memória retorna em breve.mp4');
    }

    create () {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the VideoScene. You could also swap this for a Scene Transition, such as a camera fade.
        
        //this.scene.start('VideoScene');
        this.scene.start('GameScene');
        //this.scene.start('SlotScene');
        //this.scene.start('SlotScene');
    }
}