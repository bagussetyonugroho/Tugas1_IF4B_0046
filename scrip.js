const inputTask = document.getElementById("inputTask");
const inputDate = document.getElementById("inputDate");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");

btnTambah.addEventListener("click", function () {

    const tugas = inputTask.value;
    const tanggal = inputDate.value;

    if (tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const listBaru = document.createElement("li");

    const teks = document.createElement("p");
    teks.innerHTML = `
        <strong>${tugas}</strong><br>
        Tanggal: ${tanggal}<br>
        Status: <span class="status">Progress</span>
    `;

    listBaru.appendChild(teks);

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");

    // tombol done
    const btnDone = document.createElement("button");
    btnDone.innerText = "Done";

    btnDone.addEventListener("click", function () {
        teks.classList.toggle("done");

        const status = teks.querySelector(".status");

        if (status.innerText === "Progress") {
            status.innerText = "Done";
        } else {
            status.innerText = "Progress";
        }
    });

    // tombol edit
    const btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";

    btnEdit.addEventListener("click", function () {

        const tugasBaru = prompt("Edit tugas:", tugas);

        if (tugasBaru !== null && tugasBaru !== "") {
            teks.innerHTML = `
                <strong>${tugasBaru}</strong><br>
                Tanggal: ${tanggal}<br>
                Status: <span class="status">Progress</span>
            `;
        }
    });

    // tombol hapus
    const btnHapus = document.createElement("button");
    btnHapus.innerText = "Hapus";

    btnHapus.addEventListener("click", function () {
        listBaru.remove();
    });

    buttonGroup.appendChild(btnDone);
    buttonGroup.appendChild(btnEdit);
    buttonGroup.appendChild(btnHapus);

    listBaru.appendChild(buttonGroup);

    daftarTugas.appendChild(listBaru);

    inputTask.value = "";
    inputDate.value = "";
});

// testing github