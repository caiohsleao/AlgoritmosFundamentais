import java.util.Scanner;

public class MDC {

    Scanner prompt = new Scanner((System.in));

    public void MDC() {
        int a,b,mdc = 1, maior;

        System.out.printf(" Insira o valor de A: %n");
        a = prompt.nextInt();

        System.out.printf(" Insira o valor de B: %n");
        b = prompt.nextInt();

        System.out.printf("%n%n");

        maior=a;
        if (a>b) maior=a;
        if (b>a) maior=b;

        System.out.printf(" O MDC de %d e %d é : ",a,b);

        for(int i=2; i<=maior;++i){
            while ((a % i==0)&&(b % i==0)){
                a=a/i;
                b=b/i;
                mdc=mdc*i;
            }
        }
        System.out.printf("%d%n",mdc);
    }
}












