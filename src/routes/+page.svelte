<script>
	import Webcam from './components/Webcam.svelte';

	export let form;
	let data;
	if (form) {
		data = form.data;
	}
</script>

<section class="mx-2 my-3">
	{#if data}
		<div class="greeting text-center mb-4">
			<h4 class="mb-2">SELAMAT DATANG</h4>
			<h5 class="bg-dark-subtle py-2">Alan Nuari</h5>
		</div>
		<div class="d-flex justify-content-center">
			<a
				href="https://profile.pltdktm.com/"
				target="_blank" rel="noreferrer"
				class="btn btn-primary py-2 w-75 d-flex align-items-center justify-content-center mb-3"
				><i class="bi-buildings me-2" /> COMPANY PROFILE</a
			>
		</div>
		<div class="card border-ligth mb-3">
			<div class="card-header d-flex justify-content-center align-items-center">TAMU WAJIB</div>
			<div class="card-body text-danger">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">
						MENGGUNAKAN ALAT PELINDUNG DIRI (APD) YANG TELAH DITETAPKAN PADA LOKASI KERJA DAN JENIS
						PEKERJAAN
					</li>
					<li class="list-group-item">
						SELALU DIDAMPINGI PEMANDU/PENGAWAS DARI PT PLN NUSANTARA POWER ULPLTD KOTAMOBAGU DAN
						MENTAATI RAMBU-RAMBU KESELAMATAN YANG TERSEDIA
					</li>
					<li class="list-group-item">
						MENGGUNAKAN PAKAIAN YANG SOPAN DAN AMAN DISETIAP LOKASI KERJA
					</li>
					<li class="list-group-item">
						BILA TERJADI KEADAAN DARURAT SEGERA MENUJU TEMPAT BERKUMPUL (ASSEMBLY POINT) YANG TELAH
						DITENTUKAN
					</li>
				</ul>
			</div>
		</div>
	{:else}
		<h3 class="text-center mb-4">FORM PENERIMAAN TAMU</h3>
		<form method="POST">
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="floatingNama"
					placeholder="Nama Lengkap"
					name="nama_lengkap"
					required
				/>
				<label for="floatingNama">Nama Lengkap</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="floatingInstansi"
					placeholder="Instansi / Perusahaan"
					name="instansi"
					required
				/>
				<label for="floatingInstansi">Instansi / Perusahaan</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="number"
					class="form-control"
					id="floatingPhone"
					placeholder="No. Handphone"
					name="hp"
				/>
				<label for="floatingPhone">No. Handphone</label>
			</div>
			<div class="form-floating mb-3">
				<input
					type="text"
					class="form-control"
					id="floatingTujuan"
					placeholder="Tujuan Berkunjung"
					name="tujuan"
					required
				/>
				<label for="floatingTujuan">Tujuan Berkunjung</label>
			</div>
			<div class="mb-4">
				<Webcam />
			</div>
			<div class="d-flex justify-content-center">
				<button class="btn btn-primary w-50" type="submit">Submit</button>
				<button class="btn btn-outline-secondary ms-1" type="reset"
					><i class="bi-arrow-clockwise" /></button
				>
			</div>
		</form>
	{/if}
</section>

<style>
	h3 {
		font-weight: 800;
	}
	input,
	button {
		border-radius: 15px;
	}
	.greeting h4 {
		margin: 0px;
		font-size: 25px;
		font-weight: 700;
	}
	.greeting h5 {
		margin: 0px;
		font-size: 23px;
		font-weight: 300;
	}
	.card-header {
		height: 60px;
		font-size: 20px;
		font-weight: 700;
	}
	li {
		font-size: 13px;
	}
	i {
		font-size: 30px;
	}
	a {
		border-radius: 15px;
	}
</style>
