function hasil()
{
    var nama = document.getElementById('nama_in').value;
    var m1= +document.getElementById("t1").value; // tanda + untuk mengubah menjadi int dari array
    var m2= +document.getElementById("t2").value; // tambah .value untuk mengambil value dari document yang sudah di get
    var m3= +document.getElementById("t3").value;
    var m4= +document.getElementById("t4").value;
    var m5= +document.getElementById("t5").value;
    var uas=+document.getElementById("uas").value;
    var uts=+document.getElementById("uts").value;

    tgs1 = 0.1*m1;
    tgs2 = 0.1*m2;
    tgs3 = 0.1*m3;
    tgs4 = 0.1*m4;
    tgs5 = 0.1*m5;
    uts = 0.25*uts;
    uas = 0.25*uas;
 
    jumlah = tgs1+tgs2+tgs3+tgs4+tgs5+uts+uas;
 
   var grade;

      if(jumlah >=80)
     {
     grade= "A <br><br>  Selamat Anda LULUS" ;
     }
     else if (jumlah >=76 && jumlah < 80)
     {
     grade= "B+ <br><br> Selamat Anda LULUS" ;
     }
     else if (jumlah >=70 && jumlah < 76)
     {
     grade= "B <br><br> Selamat Anda LULUS" ;
     }
     else if (jumlah >=65 && jumlah < 70)
     {
     grade= "C+ <br><br> Selamat Anda LULUS" ;
     }
     else if (jumlah >=60 && jumlah < 65)
     {
     grade= "C <br><br> Selamat Anda LULUS" ;
     }
     else if (jumlah >=50 && jumlah < 60)
     {
     grade= "D <br><br> Anda TIDAK LULUS" ;
     }
     else if (jumlah < 50)
     {
     grade= "E <br><br> Anda TIDAK LULUS" ;
     }
     else
     {
     grade="error" ;
     }
 
 
 /*output*/ 
    document.getElementById("note").innerHTML="Note : ";
    document.getElementById("nama_out").innerHTML="Nama : "+nama;
    document.getElementById("ket_tugas1").innerHTML="Tugas1 10% : "+tgs1;
    document.getElementById("ket_tugas2").innerHTML="Tugas2 10% : "+tgs2;
    document.getElementById("ket_tugas3").innerHTML="Tugas3 10% : "+tgs3;
    document.getElementById("ket_tugas4").innerHTML="Tugas4 10% : "+tgs4;
    document.getElementById("ket_tugas5").innerHTML="Tugas5 10% : "+tgs5;
    document.getElementById("ket_uts").innerHTML="Tugas 25% : "+uts;
    document.getElementById("ket_uas").innerHTML="Tugas 25% : "+uas;
 
 
    document.getElementById("jumlah_out").innerHTML="Jumlah : "+jumlah;
    document.getElementById("grade_out").innerHTML="Grade : "+grade;
 
 
   
 
 }