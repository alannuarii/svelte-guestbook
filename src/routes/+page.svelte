<script>
	import Webcam from './components/Webcam.svelte';
</script>

<section class="mx-2 my-3">
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
</section>

<style>
	h3 {
		font-weight: 800;
	}
	input,
	button {
		border-radius: 15px;
	}
</style>
