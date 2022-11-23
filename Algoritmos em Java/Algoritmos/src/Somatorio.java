import java.util.Scanner;

public class Somatorio {
    
        Scanner prompt = new Scanner(System.in);
        int n, num, soma = 0, i = 0;

        public void Somatorio() {
            System.out.println("Quantos números a serem somados: ");
            int n = prompt.nextInt();
            while (i < n) {
                i++;
                System.out.println("Entre com o " + i + "º número");

                num = prompt.nextInt();
                soma = soma + num;

                System.out.println("A soma é: " + soma);

            }
        }

}



