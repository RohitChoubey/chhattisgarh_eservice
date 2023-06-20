<?php
use Dompdf\Dompdf;

if (!function_exists('generate_pdf')) {
    function generate_pdf($html, $filename = 'document', $paper = 'A4', $orientation = 'portrait'){
        $dompdf = new Dompdf();
        $dompdf->loadHtml($html);
        $dompdf->setPaper($paper, $orientation);
        $dompdf->render();
        $dompdf->stream($filename . '.pdf', array('Attachment' => 0));

    }
}
?>