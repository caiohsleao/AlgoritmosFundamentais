import java.util.Scanner;


public class Contagem {

    int n, cont = 0, i = 0;
    Scanner prompt = new Scanner((System.in));


    public void Contagem(){

        System.out.println("Informe o valor de N: ");
        int n = prompt.nextInt();

        while (i < n) {
            i++;

        }

        System.out.println("Existem " + i + " números inteiros entre 1 e " + n);




    }
}
